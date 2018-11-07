<?php
echo 'Dữ Liệu Chúng Tôi Nhận Được Là <br/>';
if (isset($_GET['id'])){
foreach ($_GET as $key => $val)
{
    echo '<strong>' . $key . ' => ' . $val . '</strong><br/>';
}
}
?>