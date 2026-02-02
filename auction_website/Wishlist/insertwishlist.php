<?php

include("../conection.php");

if (isset($_POST["p_name"]) && isset($_POST["user_id"]) && isset($_POST["img"])) {
    $p_name = $_POST["p_name"];
    $user_id = $_POST["user_id"];
    $img = $_POST["img"];

    // Validate and sanitize input
    $p_name = mysqli_real_escape_string($con, $p_name);
    $user_id = mysqli_real_escape_string($con, $user_id);
    $img = mysqli_real_escape_string($con, $img);

    // Check if item already exists in wishlist
    $query = "SELECT * FROM `tbl_wishlist` WHERE p_name = '$p_name' AND user_id = $user_id";
    $alreadyAdded = mysqli_query($con, $query);

    $arr = [];

    if (mysqli_num_rows($alreadyAdded) > 0) {
        $arr["success"] = "The product is already added";
    } else {
        // Insert into wishlist
        $query = "INSERT INTO `tbl_wishlist` (p_name, user_id, img) VALUES ('$p_name', $user_id, '$img')";
        mysqli_query($con, $query);

        $arr["success"] = "The product is added successfully";
    }

    print(json_encode($arr));
} else {
    $arr["error"] = "Please provide all required fields";
    print(json_encode($arr));
}
