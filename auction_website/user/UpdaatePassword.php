<?php
include("../conection.php");
if(isset($_POST["id"])){

    $id = $_POST["id"];
}
if(isset($_POST["password"])){
    $password= $_POST["password"];

}


$encrpty_Password=password_hash($password,PASSWORD_DEFAULT);

$query = "UPDATE `tbl_user` SET `password` = '$encrpty_Password' WHERE `id` = $id";

$result = mysqli_query($con,$query);


$arr = [];
if($result){
    $arr["success"] = "true";
}else{
    $arr["success"] = "false";
}

print(json_encode($arr));

?>