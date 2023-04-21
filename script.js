function clearInputFields() {
    for (let i=1; i <= 10; i++) {
        document.getElementById(`line-${i}`).value = ''
    }
}

function createDataString() {
    // to write
}


function submitInputData() {
    // const data1 = document.getElementById("line-1").value;
    let lineArr = []

    for (let i=1; i <= 10; i++) {
        let lineVal = document.getElementById(`line-${i}`).value
        console.log(`line ${i}'s value is ${lineVal}`)

        if (lineVal === '') continue

        lineArr.push(lineVal)
    }

    console.log("arr is" + lineArr)



    clearInputFields()

    // const xhr = new XMLHttpRequest();

    // xhr.open("POST", "index.php");
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // xhr.onreadystatechange = function() {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         console.log(xhr.responseText);
    //     }
    // };

    // xhr.send("data=" + data);
}

function sayHello() {
    console.log("hello world")
}
