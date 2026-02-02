<?php
include("../conection.php");

if(isset($_POST["name"])){
    $name = $_POST["name"];

}
if(isset($_POST["email"])){
    $email = $_POST["email"];

}
if(isset($_POST["msg"])){
    $msg = $_POST["msg"];

}


$query ="INSERT INTO `tbl_contact`( `name`, `email`, `msg`) VALUES ('$name','$email','$msg')";
$result = mysqli_query($con, $query);

$arr = [];
if ($result) {
    $arr["success"] = "true";
} else {
    $arr["success"] = "false";
}

print(json_encode($arr));
?>