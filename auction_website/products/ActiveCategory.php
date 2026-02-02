<?php

include("../conection.php");
$query = "SELECT * FROM `categories` WHERE status=1";
$result = mysqli_query($con,$query);

$arr=[];

while($row = mysqli_fetch_assoc($result)){
    $arr[] = $row;
}
print(json_encode( $arr ));
?>