<?php
include_once 'setting.php';

$loc=$_POST["location"];
go($loc);

$dir=$_POST["direction"];
move($dir);

?>

