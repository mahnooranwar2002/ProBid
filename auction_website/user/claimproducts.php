<?php
include("../conection.php");

if(isset($_POST["u_name"])){
    $name = $_POST["u_name"];

}
if(isset($_POST["email"])){
    $email = $_POST["email"];

}if(isset($_POST["address"])){
    $address = $_POST["address"];

}if(isset($_POST["products_Data"])){
    $productData = $_POST["products_Data"];

}if(isset($_POST["u_id"])){
    $User_id = $_POST["u_id"];

}if(isset($_POST["totalPrice"])){
    $totalPrice = $_POST["totalPrice"];

}
if(isset($_POST["price"])){
    $price = $_POST["price"];

}

$query="INSERT INTO `tbl-claim`( `u_name`, `email`, `address`, `status`, `products_Data`, `u_id`,'price' ,`totalPrice`) VALUES ('$name','$email','$address','pending','$productData','$User_id','$price','$totalPrice')";
$result = mysqli_query($con, $query);
 if($result){
       $delete_query="DELETE  from tbl_winners WHERE buyer_id = $User_id ";
    $results = mysqli_query($con, $delete_query);
 }
$arr = [];
if($result){

    $arr["success"] = "true";
}else{
    $arr["success"] = "false";
}

print(json_encode($arr));

?>