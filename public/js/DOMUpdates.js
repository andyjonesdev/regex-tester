import { fetchAttemptHistory, sendPostReqAsJSON } from "./fetches.js";


// 1. if there are fewer than 7 records, populate those fields with placeholders
// 2. create a tr with a td for RegEx and a td for matchCount
// 3. append the new tr to the table
function populateRecentAttemptsTable(dataArr) {
    let tableBody = document.querySelector("tbody")

    while (dataArr.length < 7) {
        dataArr.push({
            regex: "----------",
            matchCount: "-----"
        })
    }

    dataArr.forEach(entry => {
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


export function fetchAttemptHistoryAndPopulateTable() {
    fetchAttemptHistory()
    .then(data => populateRecentAttemptsTable(data));
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

// given a php url and obj of KV pairs, send a fetch post request with the KV pairs as data
export function fetchDataFromPHPAndUpdateDOM(phpUrl, valuesObj) {
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

export function clearInputFields() {
    let regexField = document.getElementById("regex")
    regexField.value = ''

    for(let i = 1; i <= 10; i++) {
        let testLineField = document.getElementById(`line-${i}`)
        testLineField.value = ''
    }
}
