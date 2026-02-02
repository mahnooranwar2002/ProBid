<?php
include("../conection.php");
if(isset($_POST["id"])){

    $id = $_POST["id"];
}
if(isset($_POST["status"])){
    $status = $_POST["status"];

}

$query = "UPDATE `tbl-claim` SET `status` = '$status' WHERE `id` = $id ";

$result = mysqli_query($con,$query);


$arr = [];
if($result){
    $arr["success"] = "true";
}else{
    $arr["success"] = "false";
}

print(json_encode($arr));

?>