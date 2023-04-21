<?php
    $input_data = file_get_contents("php://input");

    $json_data = json_decode($input_data);

    if($json_data){
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

        // Validate & Sanitize
        // Run preg_match
        // Store resulting infos in SQLite

        $data = array('result' => 'success',
        'line1'=>$line1,
        'line2'=>$line2,
        'line3'=>$line3,
        'line4'=>$line4,
        'line5'=>$line5,
        'line6'=>$line6,
        'line7'=>$line7,
        'line8'=>$line8,
        'line9'=>$line9,
        'line10'=>$line10);

        header('Content-Type: application/json');

        echo json_encode($data);
    } else {
        $data = array('error' => 'Invalid JSON data');

        header('Content-Type: application/json');

        echo json_encode($data);
    }
?>
