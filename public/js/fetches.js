export function sendPostReqAsJSON(phpUrl, dataObj) {
    return fetch(phpUrl, {
        method: "POST",
        mode: "same-origin",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataObj)
    })
    .catch(error => console.error('Request failed:', error));
}

export function fetchAttemptHistory() {
    return fetch('../src/regex_history.php', {
        method: "GET",
        mode: "same-origin",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .catch(error => console.error('Request failed:', error));
}
