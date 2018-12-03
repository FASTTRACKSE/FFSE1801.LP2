<?php
header('access-control-allow-origin','*');
foreach (getallheaders() as $name => $value) {
    echo "$name: $value\n";
}
?>