
<?php
include("../conection.php");

if(isset($_POST["name"])){
    $name = $_POST["name"];

}
if(isset($_POST["email"])){
    $email = $_POST["email"];

}
if(isset($_POST["password"])){
    $password= $_POST["password"];

}

$SELECTQuey="SELECT * FROM tbl_user where email ='$email'";
$emailEXSIITING = mysqli_query($con, $SELECTQuey);
 if (mysqli_num_rows($emailEXSIITING) == 1) {
        $arr["success"] = "false";
        $arr["message"] = "email  already exists.";
    } else {
        $encrpty_Password=password_hash($password,PASSWORD_DEFAULT);
        
        $query = "INSERT INTO `tbl_user`( `name`, `email`, `status`, `password`, `is_admin`) VALUES ('$name','$email',1,'$encrpty_Password',0)";
        $result = mysqli_query($con, $query);

        if ($result) {
            $arr["success"] = "true";
            $arr["message"] = "Your account is created now.";
        } else {
            $arr["success"] = "false";
            $arr["message"] = "Error adding category: " . mysqli_error($con);
        }
    }

    print(json_encode($arr));
?>