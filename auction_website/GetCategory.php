<?php

include("conection.php");
if(isset($_GET["id"])){
    $id = $_GET["id"];
}
$query = "SELECT * FROM `categories` WHERE `categories`.`id` = $id";

$result = mysqli_query($con,$query);

$arr = [];
while($row = mysqli_fetch_assoc($result)){
    $row['id'] =(String)$row['id'];
    $arr[] = $row;

    
}
print(json_encode($arr));
?>