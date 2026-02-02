
<?php
include("../conection.php");
if(isset($_GET["u_id"])){
    $user = $_GET["u_id"];
}
$query = "SELECT * FROM `tbl-claim` where u_id = $user";
$result = mysqli_query($con,$query);

$arr=[];

while($row = mysqli_fetch_assoc($result)){
    $arr[] = $row;
}
print(json_encode( $arr ));
?>
