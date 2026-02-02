<?php

include("../conection.php");
if(isset($_GET["product_id"])){
    $Product_id = $_GET["product_id"];
}
$query = "SELECT * FROM `tbl_reviews` where product_id = $Product_id";
$result = mysqli_query($con,$query);

$arr=[];

while($row = mysqli_fetch_assoc($result)){
    $arr[] = $row;
}
print(json_encode( $arr ));
?>