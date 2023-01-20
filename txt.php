<?php

$name = $_POST['name'];
echo $name;
$email = $_POST['email'];
echo $email;
$message = $_POST['message'];
echo $message;

$content = "name:".$name.",email:".$email.",message:".$message;

$compile_dir = "留言.txt";

$file = fopen($compile_dir,"a+");

fwrite($file,$content);

fclose($file);

?>