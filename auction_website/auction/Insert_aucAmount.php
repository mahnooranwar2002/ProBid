<?php
include("../conection.php");

if (isset($_POST["user_name"])) {
    $U_Name = $_POST["user_name"];
}

if (isset($_POST["P_id"])) {
    $P_id = $_POST["P_id"];
}

if (isset($_POST["P_name"])) {
    $p_name = $_POST["P_name"];
}

if (isset($_POST["user_id"])) {
    $user_id = $_POST["user_id"];
}
if (isset($_POST["amount"])) {
    $amount = $_POST["amount"];
}

$query="Select *  from  tbl_items where id = $P_id ";

$arr = [];
$statuSresult = mysqli_query($con, $query);
$currentStatus=mysqli_fetch_assoc($statuSresult);
$oldamount=$currentStatus["minimun_bid"];
if($oldamount<$amount){
//    update bid Amount
$updateQuery="UPDATE `tbl_items` SET minimun_bid = $amount where id = $P_id ";
mysqli_query($con,$updateQuery);
// insert Query;
$insertQueires="INSERT INTO `tbl_bidding`( `user_name`, `P_id`, `P_name`, `user_id`, `amount`) VALUES ('$U_Name','$P_id','$p_name','$user_id','$amount')";
mysqli_query($con,$insertQueires);



    $arr["success"] = "true";
}else{
    $arr["success"] = "false";
}

print(json_encode($arr));
?>