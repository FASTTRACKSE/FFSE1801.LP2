<?php
header('Access-Control-Allow-Origin: *');  
session_start();
$a =  session_id();
var_dump($a);
?>