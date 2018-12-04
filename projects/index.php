<?php
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Origin: *'); 
$ch = curl_init(); 
curl_setopt($ch, CURLOPT_URL, ""); 
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
curl_exec($ch); 
?>