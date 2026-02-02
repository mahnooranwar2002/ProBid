<?php
include("../conection.php");

$query = "SELECT * FROM `tbl-claim` ";
$result = mysqli_query($con,$query);

$arr=[];

while($row = mysqli_fetch_assoc($result)){
    $arr[] = $row;
}
print(json_encode( $arr ));
?>