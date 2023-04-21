// helper fn: capture regex string value
function pushRegexStr(arr) {
    arr.push(document.getElementById('regex-str').value)
}


// helper fn: capture all values from test line input fields
function pushTestLines(arr) {
    for (let i=1; i <= 10; i++) {
        let lineVal = document.getElementById(`line-${i}`).value
        console.log(`line ${i}'s value is ${lineVal}`)

        if (lineVal === '') continue

        arr.push(lineVal)
    }
}


// helper fn: create a string from supplied regex and test line input fields
// to be sent via xml
function createDataString(strArr) {
    let dataString = ''
    let idx = 0

    strArr.forEach(str => {
        if (idx === 0) dataString += "regex=" + str
        else {
            dataString += `&data${idx}=` + str
        }
        idx += 1
    })

    return dataString
}


//helper fn: send xml request with a dataString
function xmlReqWithDataString(dataString) {
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "index.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // xhr.onreadystatechange = function() {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         console.log(xhr.responseText);
    //     }
    // };

    xhr.send(dataString);
}


// helper fn: clear all input fields after testing a set of lines
function clearInputFields() {
    document.getElementById('regex-str').value = ''

    for (let i=1; i <= 10; i++) {
        document.getElementById(`line-${i}`).value = ''
    }
}




// on click of "Test lines" button:
// 1. capture values from RegEx field & all test line input fields
// 2. concatenate values into a data string
// 3. send xml request with data string
// 4. clear input field values
function submitInputData() {
    let inputArr = []

    pushRegexStr(inputArr)
    pushTestLines(inputArr)

    let dataString = createDataString(inputArr)

    xmlReqWithDataString(dataString)
    clearInputFields()
}
