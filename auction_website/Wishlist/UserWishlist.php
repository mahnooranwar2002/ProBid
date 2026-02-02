
<?php



include("../conection.php");
if(isset($_GET["user_id"])){
    $user = $_GET["user_id"];
}
$query = "SELECT * FROM `tbl_wishlist` where user_id = $user";
$result = mysqli_query($con,$query);

$arr=[];

while($row = mysqli_fetch_assoc($result)){
    $arr[] = $row;
}
print(json_encode( $arr ));
?>
