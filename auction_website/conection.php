<?php


$con = mysqli_connect("localhost", "root", "", "db_auction");
header("access-control-allow-origin:* ");
header("access-control-allow-methods: GET, POST, OPTIONS");
header("access-control-allow-headers: Content-Type");
header("Content-Type: application/json");
?>