<?php

include("../conection.php");


if(isset($_GET["id"])){
    $id = $_GET["id"];
}
// for fetch the data of product
$query = "SELECT * FROM `tbl_items` WHERE `id` = $id";
// for fetch the Bidding of product
$bidingDATA = "SELECT * FROM tbl_bidding WHERE P_id = $id ORDER BY amount DESC LIMIT 1;";

$result = mysqli_query($con,$query);
$BiddingInfo = mysqli_query($con,$bidingDATA);

$data=mysqli_fetch_assoc($result);
$end_Date=$data["endDate"];
$Proname=$data["itemTittle"];
$PImag=$data["picture"];
$bid_detail=mysqli_fetch_assoc($BiddingInfo);
$userName=$bid_detail["user_name"];
$userID=$bid_detail["user_id"];


$BiddAmount=$bid_detail["amount"];

$wining_date=date("Y-m-d");
$arr = [];
if($end_Date < date("Y-m-d")){
  
$insertQuery="INSERT INTO `tbl_winners`( `item_Id`, `buyer_id`, `winningBid`, `wining_Date`, , `uName`, `PName`, `pImage`) VALUES ('$id','$userID','$BiddAmount','$wining_date','$userName','$Proname','$PImag')";
$result = mysqli_query($con, $insertQuery);

$updateQuery="UPDATE `tbl_items` SET  `bid_status`= 2 where id=$id";
$result = mysqli_query($con, $updateQuery);
    $arr["status"] = "ended"; 


}else{
    // If the End Date is TODAY or LATER
    $arr["status"] = "active"; // CORRECT STATUS
}




// 3. Print the final JSON array

If($result){
    $arr["success"] = "true";
}else{
    $arr["success"] = "false";
}
print(json_encode($arr));
?>