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
    <main id="rt-container">
        <section id="rt-title">Regular Expression Tester</section>
        <section id="rt-content">
            <section id="rt-inputs">
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

                    <!-- <input type="button" value="Test Lines" id="submit"> -->

                    <div id="buttons">
                        <input type="button" class="button" value="Test Lines" id="submit">
                        <input type="button" class="button" value="Clear Fields" id="clear-inputs">
                    </div>
                </form>
            </section>
            <section id="rt-matches-attempts">
                <section id="matches">
                    <ul id="last-test-ul">Last Test Results
                        <!-- matched strings are dynamically appended here -->
                    </ul>
                </section>
                <section id="attempts">
                    <table id="history-table">
                        <thead>
                            <tr id="headings">
                                <th>Recent RegEx Attempts</th>
                                <th>Match Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- table rows are dynamically appended here -->
                        </tbody>
                    </table>
                </section>
            </section>
        </section>
    </main>
</body>
</html>
