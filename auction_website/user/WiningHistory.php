<?php

include("../conection.php");

// --- START: Input Validation and Security ---
// if (!isset($_GET["id"]) || !is_numeric($_GET["id"])) {
//     header('Content-Type: application/json');
//     echo json_encode(["error" => "Invalid or missing buyer ID."]);
//     exit;
// }


$buyer_id = $_GET["id"];
// --- END: Input Validation and Security ---

// 1. Use a single efficient query with a subquery (IN clause)
$query = "  SELECT * FROM  tbl_winners WHERE buyer_id = $buyer_id";

$resp = mysqli_query($con, $query);

$arr = [];

if ($resp) {
    // 2. Loop through all results from the tbl_items query
    while($row = mysqli_fetch_assoc($resp)){
        $arr[] = $row;
    }
} else {
    // Handle SQL error
    $arr["error"] = "SQL query failed: " . mysqli_error($con);
}

// 3. Print the final JSON array containing all products
header('Content-Type: application/json');
print(json_encode($arr));

?>