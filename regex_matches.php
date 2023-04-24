<?php
// take in up to 10 test lines passed via AJAX
// return an obj with {regex_attempt: "string", match_count: n, matches: []}
function mass_preg_match($regex_str, ...$test_lines) {
    $match_obj = [];

    $match_obj["regex_attempt"] = $regex_str;
    $match_obj["match_count"] = 0;
    $match_obj["matches"] = [];
    $match_obj["failures"] = [];

    foreach($test_lines as $line) {
        if ($line === '' || preg_match($regex_str, $line) === false) continue;
        elseif (preg_match($regex_str, $line) === 1) {
            array_push($match_obj["matches"], $line);
            $match_obj["match_count"] += 1;
        }
        else {
            array_push($match_obj["failures"], $line);
        }
    };

    return $match_obj;
}


// persist RegEx string and # of matches to SQLite
// prepare statement and bind values to avoid SQL injection
function db_insert_new_attempt($regex_str, $match_count) {
    $db = new SQLite3("regextester.sqlite");
    $stmt = $db->prepare('INSERT INTO attempts (regex, matchCount) VALUES (:value1, :value2)');

    $stmt->bindValue(':value1', $regex_str);
    $stmt->bindValue(':value2', $match_count);

    $stmt->execute();
    $db->close();
};

// parse JSON sent via AJAX POST
$input_data = file_get_contents("php://input");
$json_data = json_decode($input_data, false);

// capture data values for use in mass_preg_match
if($json_data){
    $regex = $json_data->regex;
    $line1 = $json_data->line1;
    $line2 = $json_data->line2;
    $line3 = $json_data->line3;
    $line4 = $json_data->line4;
    $line5 = $json_data->line5;
    $line6 = $json_data->line6;
    $line7 = $json_data->line7;
    $line8 = $json_data->line8;
    $line9 = $json_data->line9;
    $line10 = $json_data->line10;

    $match_obj = mass_preg_match($regex, $line1, $line2, $line3, $line4, $line5, $line6, $line7, $line8, $line9, $line10);


    $regex_attempt  = $match_obj["regex_attempt"];
    $match_count = $match_obj["match_count"];

    db_insert_new_attempt($regex_attempt, $match_count);

    // send results of mass_preg_match back to JS to dynamically update "Lines Tested" section
    $data = array(
        "status" => "success",
        "matches"=>$match_obj["matches"],
        "failures" => $match_obj["failures"],
        "matchCount"=>$match_obj["match_count"],
        "regexAttempt"=>$match_obj["regex_attempt"]
    );

    header('Content-Type: application/json');
    echo json_encode($data);

} else {
    $data = array('error' => 'Invalid JSON data');

    header('Content-Type: application/json');
    echo json_encode($data);
}

?>
