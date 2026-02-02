<?php

include("../conection.php");
$query = "SELECT * FROM `tbl_items` where bid_status = 1 limit  3";
$result = mysqli_query($con,$query);

$arr=[];

while($row = mysqli_fetch_assoc($result)){
    $arr[] = $row;
}
print(json_encode( $arr ));
?>