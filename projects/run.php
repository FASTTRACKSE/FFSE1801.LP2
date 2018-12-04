<?php
$dir    = '/tmp';
$files1 = scandir($dir);
$files2 = scandir($dir, 1);

print_r("<pre>");
print_r($files1);
print_r($files2);
print_r("</pre>");
$dir    = '/';
$files1 = scandir($dir);
$files2 = scandir($dir, 1);
print_r("<pre>");
print_r($files1);
print_r($files2);
print_r("</pre>");
$dir    = '../';
$files1 = scandir($dir);
$files2 = scandir($dir, 1);
print_r("<pre>");
print_r($files1);
print_r($files2);
print_r("</pre>");
?>