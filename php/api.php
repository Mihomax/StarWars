<?php  header("Access-Control-Allow-Origin: *");?>

<?php

$people = file_get_contents('https://swapi.co/api/people');
json_decode($people);
$planets = file_get_contents('https://swapi.co/api/planets');
json_decode($planets);
$starships = file_get_contents('https://swapi.co/api/starships');
json_decode($starships);

$_POST = file_get_contents('php://input');
$query = $_POST;

if ($query === 'people') {
    echo $people;
}
else if ($query === 'planets') {
    echo $planets;
}
else if ($query === 'starships') {
    echo $starships;
}
else {
    $search = file_get_contents('https://swapi.co/api/people'.$query);
    json_decode($search);
    echo $search;
}

// $data = file_get_contents('https://swapi.co/api/'.$query);
// json_decode($data);

//     echo $data;

