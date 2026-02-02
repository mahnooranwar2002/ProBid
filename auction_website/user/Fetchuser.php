<?php

include("../conection.php");
$query = "SELECT * FROM `tbl_user` where is_admin = 0";
$result = mysqli_query($con,$query);

$arr=[];

while($row = mysqli_fetch_assoc($result)){
    $arr[] = $row;
}
print(json_encode( $arr ));
?>