<?php

include("conection.php");
if(isset($_POST["name"])){
    $name = $_POST["name"];

}
if(isset($_POST["description"])){
    $description = $_POST["description"];

}
if(isset($_POST["status"])){
    $status = $_POST["status"];

}
$SELECTQuey="SELECT * FROM categories where name ='$name'";
$nameEXSIITING = mysqli_query($con, $SELECTQuey);
 if (mysqli_num_rows($nameEXSIITING) == 1) {
        $arr["success"] = "false";
        $arr["message"] = "Category with the same name already exists.";
    } else {
        // Insert new category
        $query = "INSERT INTO categories (name, status, description) VALUES ('$name', $status, '$description')";
        $result = mysqli_query($con, $query);

        if ($result) {
            $arr["success"] = "true";
            $arr["message"] = "Category added successfully.";
        } else {
            $arr["success"] = "false";
            $arr["message"] = "Error adding category: " . mysqli_error($con);
        }
    }

    print(json_encode($arr));


?>