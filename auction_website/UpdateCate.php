<?php
include("conection.php");
if(isset($_POST["id"])){

    $id = $_POST["id"];
}
if(isset($_POST["name"])){
    $name = $_POST["name"];

}
if(isset($_POST["description"])){
    $description = $_POST["description"];

}
if(isset($_POST["status"])){
    $status = $_POST["status"];

}
$query = "UPDATE `categories` SET `name` = '$name', `description` = '$description', `status` = $status WHERE `categories`.`id` = $id";

$result = mysqli_query($con, $query);


$arr = [];
if($result){
    $arr["success"] = "true";
}else{
    $arr["success"] = "false";
}

print(json_encode($arr));

?>