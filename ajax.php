<?php
    $input_data = file_get_contents("php://input");

    $json_data = json_decode($input_data);

    if($json_data){
        $test = $json_data->test;
        $test2 = $json_data->test2;

        // Store stuff in DB and run preg_match

        $data = array('result' => 'success', 'data'=>$test, 'data2'=>$test2);

        header('Content-Type: application/json');

        echo json_encode($data);
    } else {
        $data = array('error' => 'Invalid JSON data');

        header('Content-Type: application/json');

        echo json_encode($data);
    }
?>
