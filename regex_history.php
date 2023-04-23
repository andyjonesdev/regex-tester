<?php
try{
    $db = new SQLite3("regextester.sqlite");
} catch(Exception $exception){
    echo "failure: " . $exception;
}
$db->busyTimeout(5000);
$db->exec('PRAGMA journal_mode = wal;');
$db->exec(
    'CREATE TABLE IF NOT EXISTS attempts(id INTEGER PRIMARY KEY AUTOINCREMENT, regex VARCHAR(50), matchCount INT, createdAt DATETIME DEFAULT CURRENT_TIMESTAMP)'
);
//query DB for any recent RegEx attempts
$stmt = $db->prepare('SELECT regex, matchCount FROM attempts ORDER BY createdAt DESC LIMIT 7');
$res = $stmt->execute();

// send recent RegEx attempts to JS for display in RegEx Attempts table
$res_arr = array();
while ($row = $res->fetchArray(SQLITE3_ASSOC)) {
    array_push($res_arr, $row);
}

$stmt->close();
$db->close();

$json_data = json_encode($res_arr);
header('Content-Type: application/json');
echo $json_data;
?>
