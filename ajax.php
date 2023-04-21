<?php
    // take in up to 10 test lines passed via AJAX
    // return an obj with {regex_attempt: "string", match_count: n, matches: []}
    function mass_preg_match($regex_str, ...$test_lines) {
        $match_obj = (object)[];

        $match_obj["regex_attempt"] = $regex_str;
        $match_obj["match_count"] = 0;
        $match_obj["matches"] = [];

        foreach($test_lines as $line) {
            if ($line === '' || preg_match($regex_str, $line) === 0) continue;
            if (preg_match($regex_str, $line) === 1) {
                array_push($match_obj["matches"], $line);
                $match_obj["match_count"] += 1;
            };
        };

        $match_obj["matches"] = $match_obj["matches"];

        return $match_obj;
    }

    $input_data = file_get_contents("php://input");

    $json_data = json_decode($input_data, false);

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

        // $match_obj = mass_preg_match($regex, $line1, $line2, $line3, $line4, $line5, $line6, $line7, $line8, $line9, $line10);

        $data = array(
            "status" => "success",
            "regex" => $regex,
            "line1" => $line1,
            "line2" => $line2,
            "line3" => $line3,
            "line4" => $line4,
            "line5" => $line5,
            "line6" => $line6,
            "line7" => $line7,
            "line8" => $line8,
            "line9" => $line9,
            "line10" => $line10
        );

        header('Content-Type: application/json');
        echo json_encode($data);

    } else {
        $data = array('error' => 'Invalid JSON data');

        header('Content-Type: application/json');

        echo json_encode($data);
    }

?>
