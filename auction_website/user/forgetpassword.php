<?php
include('../conection.php');

if(isset($_POST["email"])){
    $email = $_POST["email"];

}
if(isset($_POST["password"])){
    $password= $_POST["password"];

}
$arr = [];
$SELECTQuey="SELECT * FROM tbl_user where email ='$email'";
$emailEXSIITING = mysqli_query($con, $SELECTQuey);
if (mysqli_num_rows($emailEXSIITING) == 1) {
    $encrpty_Password=password_hash($password,PASSWORD_DEFAULT);
    $query = "UPDATE `tbl_user` SET `password` = '$encrpty_Password' WHERE `email` = '$email'";
    $result = mysqli_query($con,$query);
if($result){
    $arr["success"] = "true";
}

}else{
      
        $arr["success"] = "false";
}



print(json_encode($arr));
?>