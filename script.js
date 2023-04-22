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


// clear all input fields after testing a set of lines
function clearInputFields() {
    document.getElementById('regex').value = ''

    for (let i=1; i <= 10; i++) {
        document.getElementById(`line-${i}`).value = ''
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
        for (entry in data) console.log(`${entry}, ${data[entry]}`)

        // use the returned "matches" key to get the lines that match
        let matches = data["matches"]
        console.log("matches--> " + matches)

        let idx = 1
        // replace inner text of li${n} with the match
        // TODO: change logic to creating an li for each match and appending it to the ul
        matches.forEach(match => {
            let liToReplace = document.getElementById(`li${idx}`)
            liToReplace.innerText = match
            idx++
        })
    })
    .catch(error => {
        console.error('Error:', error);
    });
};


// on click of "Test lines" button:
// 1. capture values from RegEx input field & all test line input fields
// 2. store values in an object
// 3. send fetch POST request as JSON, supplying the object
// 4. clear input field values
document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("submit");
    let dataObj = {}

    button.addEventListener("click", () => {
        addRegexToObj(dataObj);
        addTestLinesToObj(dataObj);
        postReqAsJSON('regex_matches.php', dataObj);
        clearInputFields();
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
        data.forEach(entry => {
            console.log(`${entry.regex}: ${entry.matchCount}`);
            // TODO: dynamically update rows of "recent attempts" table with this response data
        });
    })
    .catch(error => {
    console.error('Request failed:', error);
    });
});
