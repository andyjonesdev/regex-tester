// helper: capture regex string and add it to an obj
function addRegexToObj(obj) {
    let regex = document.getElementById('regex').value
    obj["regex"] = regex
}


// helper: capture all values from test line input fields and add them to an obj
function addTestLinesToObj(obj) {
    for (let i=1; i <= 10; i++) {
        let lineVal = document.getElementById(`line-${i}`).value

        obj[`line${i}`] = lineVal
    }
}


// helper: clear all input fields after testing a set of lines
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
        // return data
        for (entry in data) console.log(`${entry}, ${data[entry]}`)
    })
    .catch(error => {
        console.error('Error:', error);
    });

};

function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

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
        console.log("outgoing JSON String: " + JSON.stringify(dataObj))
        postReqAsJSON('ajax.php', dataObj);
        clearInputFields();
    });
});
