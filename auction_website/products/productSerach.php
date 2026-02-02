<?php
include("../conection.php");
if(isset($_POST["value"])){
    $value = $_POST["value"];

}

$query = "SELECT * FROM `tbl_items` WHERE itemTittle Like '%$value%'";

$result = mysqli_query($con, $query);


$arr = [];
foreach($result as $row){
    $arr[] = $row;
}
print(json_encode($arr));
?>