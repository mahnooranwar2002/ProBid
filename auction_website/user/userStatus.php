<?php

include("../conection.php");

$id = $_GET["id"];
$statusQuery = "Select status  from  tbl_user where id = $id ";
$statuSresult = mysqli_query($con, $statusQuery);
$currentStatus=mysqli_fetch_assoc($statuSresult);
$status=$currentStatus["status"];
if($status == 1){
    $statusupdate="Update tbl_user set status = 0 where id= $id";
}else{
       $statusupdate="Update tbl_user set status = 1 where id= $id";
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