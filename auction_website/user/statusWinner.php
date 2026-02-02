<?php

include("../conection.php");

$id = $_GET["id"];
$statusQuery = "Select status  from  tbl_winners where winner_id = $id ";
$statuSresult = mysqli_query($con, $statusQuery);
$currentStatus=mysqli_fetch_assoc($statuSresult);
$status=$currentStatus["status"];
if($status == 0){
    $statusupdate="Update tbl_winners set status = 1 where winner_id= $id";
}
$result = mysqli_query($con, $statusupdate);

$arr = [];
If($result){
    $arr["success"] = "true";
}else{
    $arr["success"] = "false";
}

print(json_encode($arr));
?>