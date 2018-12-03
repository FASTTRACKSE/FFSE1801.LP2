<?php
header('Access-Control-Allow-Origin: *');  
foreach (getallheaders() as $name => $value) {
    echo "$name: $value\n";
}
?>