<?php

include("../conection.php");

$id = $_GET["id"];
$deleteQuery = "Delete from  tbl_reviews where id = $id ";

$result = mysqli_query($con, $deleteQuery);

$arr = [];
If($result){
    $arr["success"] = "true";
}else{
    $arr["success"] = "false";
}

print(json_encode($arr));
?>