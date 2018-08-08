<?php  header("Access-Control-Allow-Origin: *");?>

<?php

$_POST = file_get_contents('php://input');
$query = $_POST;

$data = file_get_contents('https://swapi.co/api/'.$query);
json_decode($data);

    echo $data;

