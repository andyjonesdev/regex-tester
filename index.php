<!--
    TODO: remove echoes, print_r, var_dump
 -->

 <?php
    try{
        $db = new SQLite3("regextester.sqlite");
    } catch(Exception $exception){
        echo "failure";
    }

    $db->exec('CREATE TABLE IF NOT EXISTS attempts(id INTEGER PRIMARY KEY, regex VARCHAR(50), matchcount INT)');
    $res = $db->query('SELECT * FROM attempts');
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
    <script src="script.js"></script>
    <title>Regular Expression Tester</title>
</head>
<body>
    <div id="rt-container">
        <div id="rt-title">Regular Expression Tester</div>
        <div id="rt-content">
            <div id="rt-inputs">
                <form id="inputs-form">
                    <label for="regex">Regular Expression</label><br>
                    <input type="text" class="text-input" name="regex" id="regex"><br>

                    <label for="test-lines">Expressions to Test</label><br>
                    <input type="text" class="text-input" name="text-lines" id="line-1"><br>
                    <input type="text" class="text-input" name="text-lines" id="line-2"><br>
                    <input type="text" class="text-input" name="text-lines" id="line-3"><br>
                    <input type="text" class="text-input" name="text-lines" id="line-4"><br>
                    <input type="text" class="text-input" name="text-lines" id="line-5"><br>
                    <input type="text" class="text-input" name="text-lines" id="line-6"><br>
                    <input type="text" class="text-input" name="text-lines" id="line-7"><br>
                    <input type="text" class="text-input" name="text-lines" id="line-8"><br>
                    <input type="text" class="text-input" name="text-lines" id="line-9"><br>
                    <input type="text" class="text-input" name="text-lines" id="line-10"><br>

                    <!-- <input type="button" value="Test Lines" id="submit" onclick="submitInputData()"> -->
                    <input type="button" value="Test Lines" id="submit">
                </form>
            </div>
            <div id="rt-matches-attempts">
                <div id="matches">
                    <ul id="matches-ul">Matches
                        <li id="li1">Hello, this is a long string</li>
                        <li>Hello, this is a long string</li>
                        <li>Hello, this is a long string</li>
                        <li>Hello, this is a long string</li>
                        <li>Hello, this is a long string</li>
                        <li>Hello, this is a long string</li>
                        <li>Hello, this is a long string</li>
                        <li>Hello, this is a long string</li>
                        <li>Hello, this is a long string</li>
                        <li>Hello, this is a long string</li>
                    </ul>
                </div>
                <div id="attempts">
                    <table>
                        <tr>
                            <th>Recent RegEx Attempts</th>
                            <th>Match Count</th>
                        </tr>
                        <tr>
                            <td>/Day/i</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>/Day/i</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>/Day/i</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>/Day/i</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>/Day/i</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>/Day/i</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>/Day/i</td>
                            <td>4</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
