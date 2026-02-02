<?php
include("conection.php");
if(isset($_POST["value"])){
    $value = $_POST["value"];

}

$query = "SELECT * FROM `categories` WHERE name Like '%$value%'";

$result = mysqli_query($con, $query);


$arr = [];
foreach($result as $row){
    $arr[] = $row;
}
print(json_encode($arr));
?>