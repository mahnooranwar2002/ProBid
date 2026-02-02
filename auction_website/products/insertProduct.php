<?php
include("../conection.php");

if (isset($_POST["itemTittle"])) {
    $TittleName = $_POST["itemTittle"];
}

if (isset($_FILES["picture"])) {
    $img_name = $_FILES['picture']['name'];
    $imgtmp = $_FILES['picture']['tmp_name'];
    
    // Use the correct variable for the image name
    $folder = "D:/ADSE/Auction/cilentside/public/ProductImages/" . $img_name;

    // Check for upload errors
    if (move_uploaded_file($imgtmp, $folder)) {
        // File uploaded successfully
    } else {
        echo json_encode(["success" => "false", "message" => "Failed to upload image."]);
        exit; // Stop further execution
    }
}

if (isset($_POST["description"])) {
    $des = $_POST["description"];
}
if (isset($_POST["startDate"])) {
    $S_date = $_POST["startDate"];
}
if (isset($_POST["endDate"])) {
    $e_date = $_POST["endDate"];
}
if (isset($_POST["Incremenent"])) {
    $Incremenent = $_POST["Incremenent"];
}
if (isset($_POST["minimun_bid"])) {
    $minimun_bid = $_POST["minimun_bid"];
}
if (isset($_POST["categoryName"])) {
    $categoryName = $_POST["categoryName"];
}
if (isset($_POST["user_name"])) {
    $user_name = $_POST["user_name"];
}
if (isset($_POST["summary"])) {
    $summary = $_POST["summary"];
}
// Prepare the SQL query
$query = "INSERT INTO tbl_items (itemTittle, picture, description,summary, bid_status, startDate, endDate, Incremenent, minimun_bid, categoryName, user_name) VALUES ('$TittleName', '$img_name', '$des','$summary', 0, '$S_date', '$e_date', '$Incremenent', '$minimun_bid', '$categoryName', '$user_name')";

$result = mysqli_query($con, $query);

$arr = [];
if ($result) {
    $arr["success"] = "true";
} else {
    $arr["success"] = "false";
}

print(json_encode($arr));
?>
