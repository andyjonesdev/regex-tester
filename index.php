<?php
    # echo 'Hello World'
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="styles.css" />
    <title>Regular Expression Tester</title>
</head>
<body>
    <div id="rt-container">
        <div id="rt-title">Regular Expression Tester</div>
        <div id="rt-content">
            <div id="rt-inputs">
                <form id="inputs-form">
                    <label for="regex">Regular Expression</label><br>
                    <input type="text" name="regex"><br>

                    <label for="test-lines">Expressions to Test</label><br>
                    <input type="text" name="text-lines" id="line-1"><br>
                    <input type="text" name="text-lines" id="line-2"><br>
                    <input type="text" name="text-lines" id="line-3"><br>
                    <input type="text" name="text-lines" id="line-4"><br>
                    <input type="text" name="text-lines" id="line-5"><br>
                    <input type="text" name="text-lines" id="line-6"><br>
                    <input type="text" name="text-lines" id="line-7"><br>
                    <input type="text" name="text-lines" id="line-8"><br>
                    <input type="text" name="text-lines" id="line-9"><br>
                    <input type="text" name="text-lines" id="line-10"><br>

                    <input type="button" value="Test Lines">
                </form>
            </div>
            <div id="rt-attempts"></div>
        </div>
    </div>
</body>
</html>
