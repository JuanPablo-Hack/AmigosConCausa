<?php

include "conexion.php";

$estado= $_POST["estado"];
$id = $_POST["id"];

$cancelar = mysqli_query($conexion,"DELETE from info_registros WHERE id='$id' ");

header("location: admin/dashboard.php")
?>