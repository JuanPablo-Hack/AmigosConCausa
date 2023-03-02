<?php

include "../admin/conexion.php";

$nombre = $_POST["name"];
$email = $_POST["email"];
$tel = $_POST["phone"];
$estado = "1";
$numeros_seleccionados = $_POST["numeros"];


//$numeros_seleccionados = "12,34";

$insertar_datos = mysqli_query($conexion,"INSERT INTO info_registros VALUES  (NULL,'$numeros_seleccionados','$nombre','$tel','$email','$estado')");



?>