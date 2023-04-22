<!--
    TODO: remove echoes, print_r, var_dump
    TODO: make html divs more semantic where possible -->


<?php
    // $is_fetch_request = !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';

    // $res = $db->query('SELECT regex, matchCount FROM attempts ORDER BY createdAt LIMIT 7');

    // $json_data = json_encode($res_arr[0]);
    // echo $json_data

    // $regexes = [];
    // $match_counts = [];

    // // modify this to
    // if ($db) {
    //     while ($row = $res->fetchArray()) {
    //         array_push($regexes, $row["regex"]);
    //         array_push($match_counts, $row["matchCount"]);
    //     }

    //     echo "REGEXES -> " . $regexes . "</br>";
    //     echo "MATCH COUNTS -> " . $match_counts . "</br>";
    // };
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

                    <input type="button" value="Test Lines" id="submit">
                </form>
            </div>
            <div id="rt-matches-attempts">
                <div id="matches">
                    <ul id="matches-ul">Matches
                        <li id="li1">Hello, this is a long string</li>
                        <li id="li2">Hello, this is a long string</li>
                        <li id="li3">Hello, this is a long string</li>
                        <li id="li4">Hello, this is a long string</li>
                        <li id="li5">Hello, this is a long string</li>
                        <li id="li6">Hello, this is a long string</li>
                        <li id="li7">Hello, this is a long string</li>
                        <li id="li8">Hello, this is a long string</li>
                        <li id="li9">Hello, this is a long string</li>
                        <li id="li10">Hello, this is a long string</li>
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
