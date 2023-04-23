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


// given a php url and obj of KV pairs, send a fetch post request with the KV pairs as data
function postReqAsJSON(phpUrl, valuesObj) {
    fetch(phpUrl, {
        method: "POST",
        mode: "same-origin",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(valuesObj)
    })
    .then(res => res.json())
    .then(data => {
        // TODO: extract logic to its own cb fn
        // use the returned "matches" key to get the lines that match
        let matches = data["matches"]

        // create an li for each match and append to matches ul
        let matchesUl = document.getElementById("matches-ul")
        if (matches.length) {
            matches.forEach(match => {
                let newLi = document.createElement("li")
                newLi.classList.add("success")
                newLi.innerText = match
                matchesUl.appendChild(newLi)
            })
        } else {
            let newLi = document.createElement("li")
            newLi.innerText = "No Matches"
            newLi.classList.add("error")
            matchesUl.appendChild(newLi)
        }

        // TODO: extract to helper fn
        let regex = data["regexAttempt"];
        let matchCount = data["matchCount"];
        let historyTable = document.getElementById("history-table")

        let regexData = document.createElement("td");
        let matchCountData = document.createElement("td");
        regexData.innerText = regex
        matchCountData.innerText = matchCount

        let newRow = document.createElement("tr")
        newRow.appendChild(regexData)
        newRow.appendChild(matchCountData)

        // insert latest regex attempt and matchCount to top of recent attempts table
        historyTable.tBodies[0].insertBefore(newRow, historyTable.tBodies[0].firstChild);
        // get rid of the least recent regex attempt by removing tr and both associated td from DOM
        let lastRow = document.querySelector("tbody").lastElementChild
        lastRow.children[0].remove()
        lastRow.children[0].remove()
        lastRow.remove();

    })
    .catch(error => {
        console.error('Error:', error);
    });
};


document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("submit");
    let dataObj = {}

    // on click of "Test lines" button:
    // 1. capture values from RegEx input field & all test line input fields
    // 2. store values in an object
    // 3. send fetch POST request as JSON, supplying the object
    // 4. clear any li from "matches" ul before next test
    button.addEventListener("click", () => {
        addRegexToObj(dataObj);
        addTestLinesToObj(dataObj);
        postReqAsJSON('regex_matches.php', dataObj);

        document.getElementById('matches-ul').innerHTML='Matches'
    });


    // when DOM content is loaded, ask PHP for RegEx attempt history
    fetch('regex_history.php', {
        method: "GET",
        mode: "same-origin",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        let tableBody = document.querySelector("tbody")

        // TODO: extract into helper fn
        // for each attempts entry, create a new table row, using entry.regex and entry.matchCount as the row's cells
        // append the new row onto the recent attempts table
        while (data.length && data.length < 7) {
            data.push({
                regex: "----------",
                matchCount: "-----"
            })
        }

        data.forEach(entry => {
            let newRow = document.createElement("tr")
            let newDataRegex = document.createElement("td")
            let newDataMatches = document.createElement("td")

            newDataRegex.innerText = entry.regex
            newDataMatches.innerText = entry.matchCount

            newRow.appendChild(newDataRegex)
            newRow.appendChild(newDataMatches)

            tableBody.appendChild(newRow)
        });
    })
    .catch(error => {
    console.error('Request failed:', error);
    });
});
