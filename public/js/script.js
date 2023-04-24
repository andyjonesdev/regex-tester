import {
    fetchAttemptHistoryAndPopulateTable,
    clearInputFields,
    fetchDataFromPHPAndUpdateDOM
} from "./DOMUpdates.js"


// capture regex string and add it to an obj
function addRegexToObj(obj) {
    let regex = document.getElementById("regex").value
    if (regex === "") regex = "----------"
    obj["regex"] = String(regex)
}


// capture all values from test line input fields and add them to an obj
function addTestLinesToObj(obj) {
    for (let i=1; i <= 10; i++) {
        let lineVal = document.getElementById(`line-${i}`).value

        obj[`line${i}`] = String(lineVal)
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
        fetchDataFromPHPAndUpdateDOM('../src/regex_matches.php', dataObj);

        // reset the content of "Last Test" ul after each test
        document.getElementById("last-test-ul").innerHTML="Last Test Results"
    });

    // clear RegEx and Test Line fields upon clicking "Clear Fields" button
    clearButton.addEventListener("click", clearInputFields)
});
