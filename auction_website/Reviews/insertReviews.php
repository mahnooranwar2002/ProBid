<?php

include("../conection.php");
if (isset($_POST["user_name"])) {
    $userName = $_POST["user_name"];
}
if (isset($_POST["product_name"])) {
    $productName = $_POST["product_name"];
}
if (isset($_POST["message"])) {
    $msg = $_POST["message"];
}

if (isset($_POST["product_id"])) {
    $productId = $_POST["product_id"];
}
$query = "INSERT INTO `tbl_reviews`(`user_name`, `product_name`, `product_id`, `message`) VALUES ('$userName','$productName','$productId','$msg')";

$result = mysqli_query($con, $query);
$arr = [];
if ($result) {
    $arr["success"] = "true";
} else {
    $arr["success"] = "false";
}

print(json_encode($arr));
?>