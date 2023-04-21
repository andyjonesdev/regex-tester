function submitInputData(id) {
    const data = document.getElementById(id).value;

    const xhr = new XMLHttpRequest();

    xhr.open("POST", "index.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };

    xhr.send("data=" + data);
}

function sayHello() {
    console.log("hello world")
}
