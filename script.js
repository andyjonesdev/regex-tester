// capture regex string and add it to an obj
function addRegexToObj(obj) {
    let regex = document.getElementById('regex').value
    obj["regex"] = regex
}


// capture all values from test line input fields and add them to an obj
function addTestLinesToObj(obj) {
    for (let i=1; i <= 10; i++) {
        let lineVal = document.getElementById(`line-${i}`).value

        obj[`line${i}`] = lineVal
    }
}

// use the returned "matches" and "failures" keys
// create an li for each match and each failure and append to lines tested ul
function addMatchesAndFailuresToLastTestList(dataObj) {
    let matches = dataObj["matches"]
    let failures = dataObj["failures"]

    let lastTestUl = document.getElementById("last-test-ul")
    if (matches.length) {
        matches.forEach(match => {
            let newLi = document.createElement("li")
            newLi.classList.add("success")
            newLi.innerText = match
            lastTestUl.appendChild(newLi)
        })
    }

    if (failures.length) {
        failures.forEach(failure => {
            let newLi = document.createElement("li")
            newLi.classList.add("failure")
            newLi.innerText = failure
            lastTestUl.appendChild(newLi)
        })
    }
}


function addAttemptToRecentAttemptsTable(dataObj) {
    let regex = dataObj["regexAttempt"];
        let matchCount = dataObj["matchCount"];
        let historyTable = document.getElementById("history-table")

        let regexData = document.createElement("td");
        let matchCountData = document.createElement("td");
        regexData.innerText = regex
        matchCountData.innerText = matchCount

        let newRow = document.createElement("tr")
        newRow.appendChild(regexData)
        newRow.appendChild(matchCountData)

        // insert latest regex attempt and matchCount to top of recent attempts table
        // get rid of least recent regex attempt by removing tr and both associated td from DOM
        historyTable.tBodies[0].insertBefore(newRow, historyTable.tBodies[0].firstChild);
        let lastRow = document.querySelector("tbody").lastElementChild
        lastRow.children[0].remove()
        lastRow.children[0].remove()
        lastRow.remove();
}


function sendPostReqAsJSON(phpUrl, dataObj) {
    return fetch(phpUrl, {
        method: "POST",
        mode: "same-origin",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataObj)
    })
}


// given a php url and obj of KV pairs, send a fetch post request with the KV pairs as data
function fetchDataFromPHPAndUpdateDOM(phpUrl, valuesObj) {
    sendPostReqAsJSON(phpUrl, valuesObj)
    .then(res => res.json())
    .then(data => {
        addMatchesAndFailuresToLastTestList(data)
        addAttemptToRecentAttemptsTable(data)
    })
    .catch(error => {
        console.error('Error:', error);
    });
};


function fetchAttemptHistoryAndPopulateTable() {
    fetch('regex_history.php', {
        method: "GET",
        mode: "same-origin",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => populateRecentAttemptsTable(data))
    .catch(error => console.error('Request failed:', error));
}


// 1. if there are fewer than 7 records, populate those fields with placeholders
// 2. create a tr with a td for RegEx and a td for matchCount
// 3. append the new tr to the table
function populateRecentAttemptsTable(dataObj) {
    let tableBody = document.querySelector("tbody")

    while (dataObj.length && dataObj.length < 7) {
        dataObj.push({
            regex: "----------",
            matchCount: "-----"
        })
    }

    dataObj.forEach(entry => {
        let newRow = document.createElement("tr")
        let newDataRegex = document.createElement("td")
        let newDataMatches = document.createElement("td")

        newDataRegex.innerText = entry.regex
        newDataMatches.innerText = entry.matchCount

        newRow.appendChild(newDataRegex)
        newRow.appendChild(newDataMatches)

        tableBody.appendChild(newRow)
    });
}


function clearInputFields() {
    let regexField = document.getElementById("regex")
    regexField.value = ''

    for(let i = 1; i <= 10; i++) {
        let testLineField = document.getElementById(`line-${i}`)
        testLineField.value = ''
    }
}


document.addEventListener("DOMContentLoaded", () => {
    let submitButton = document.getElementById("submit");
    let clearButton = document.getElementById("clear-inputs")
    let dataObj = {}

    // when DOM content is loaded, request RegEx attempt history from PHP
    fetchAttemptHistoryAndPopulateTable()

    // on click of "Test lines" button:
    // 1. capture values from RegEx input field & all test line input fields
    // 2. store values in an object
    // 3. send fetch POST request as JSON, supplying the object
    // 4. clear any li from "matches" ul before next test
    submitButton.addEventListener("click", () => {
        addRegexToObj(dataObj);
        addTestLinesToObj(dataObj);
        fetchDataFromPHPAndUpdateDOM('regex_matches.php', dataObj);

        // reset the content of "Last Test" ul after each test
        document.getElementById("last-test-ul").innerHTML="Last Test Results"
    });

    // clear RegEx and Test Line fields upon clicking "Clear Fields" button
    clearButton.addEventListener("click", clearInputFields)
});
