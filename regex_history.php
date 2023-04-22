<?php
try{
    $db = new SQLite3("regextester.sqlite");
} catch(Exception $exception){
    echo "failure: " . $exception;
}
$db->exec(
    'CREATE TABLE IF NOT EXISTS attempts(id INTEGER PRIMARY KEY AUTOINCREMENT, regex VARCHAR(50), matchCount INT, createdAt DATETIME DEFAULT CURRENT_TIMESTAMP)'
);
$stmt = $db->prepare('SELECT regex, matchCount FROM attempts ORDER BY createdAt LIMIT 7');
$res = $stmt->execute();

$res_arr = array();
while ($row = $res->fetchArray(SQLITE3_ASSOC)) {
    array_push($res_arr, $row);
}

$json_data = json_encode($res_arr);
header('Content-Type: application/json');
echo $json_data;
?>
