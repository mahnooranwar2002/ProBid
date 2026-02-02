<?php
include("../conection.php");

if(isset($_POST["email"])){
    $email = $_POST["email"];

}
if(isset($_POST["password"])){
    $password= $_POST["password"];

}
$arr=[];
$query="SELECT * FROM tbl_user where email ='$email'";
$userRecord = mysqli_query($con,$query);
if(mysqli_num_rows($userRecord)  == 1){
    $UserLOgined_Data=mysqli_fetch_assoc($userRecord);
     $checkQuery=password_verify($password,$UserLOgined_Data["password"]);
   if($checkQuery){
        // $userData = mysqli_fetch_assoc($passwordVarifed);
         $arr["success"]="true";   
        $arr["message"] = "Login SuccessFull";
         $arr["Userdata"] = $UserLOgined_Data; 
    }    
    else{
       $arr["success"]="False"; 
       $arr["message"] = "LoginFailed";
    }
}else{
   $arr["success"]="False"; 
         $arr["message"] = "email is not Registered!";
}
   print(json_encode($arr));
?>
