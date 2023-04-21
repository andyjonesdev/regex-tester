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
    // let testPostData = new FormData();
    // testPostData.append('testdata', 123);

    fetch(phpUrl, {
        method: "POST",
        mode: "same-origin",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        // body: testPostData
        body: JSON.stringify(valuesObj)
    })
    .then(res => res.json())
    .then(data => {
        // return data
        console.log("I received JSON")
        // console.log("regex: " + data["regex"])
        // console.log("line1: " + data["line1"])
        // console.log("line2: " + data["line2"])
        // console.log("line3: " + data["line3"])
        // console.log("line4: " + data["line4"])
        // console.log("line5: " + data["line5"])

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
        console.log("JSON String " + JSON.stringify(dataObj))
        console.log("Is valid JSON? " + isJsonString(JSON.stringify(dataObj)));
        postReqAsJSON('ajax.php', dataObj);
        clearInputFields();
    });
});
