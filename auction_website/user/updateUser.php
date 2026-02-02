<?php
include("../conection.php");
if(isset($_POST["id"])){

    $id = $_POST["id"];
}
if(isset($_POST["name"])){
    $name = $_POST["name"];

}
if(isset($_POST["email"])){
    $email = $_POST["email"];

}
$query = "UPDATE `tbl_user` SET `name` = '$name', `email` = '$email' WHERE `id` = $id";

$result = mysqli_query($con,$query);


$arr = [];
if($result){
    $arr["success"] = "true";
}else{
    $arr["success"] = "false";
}

print(json_encode($arr));

?>