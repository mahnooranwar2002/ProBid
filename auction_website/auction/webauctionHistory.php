<?php

include("../conection.php");
if(isset($_GET["P_id"])){
    $Product_id = $_GET["P_id"];
}
$query = "SELECT * FROM `tbl_bidding` where P_id = $Product_id";
$result = mysqli_query($con,$query);

$arr=[];

while($row = mysqli_fetch_assoc($result)){
    $arr[] = $row;
}
print(json_encode( $arr ));
?>