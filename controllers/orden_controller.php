<?php

include "../sendSMS.php";
include "../config/conexion.php";

$nombre = $_POST["name"];
$email = $_POST["email"];
$tel = $_POST["phone"];
$estado = "1";
$numeros_seleccionados = $_POST["numeros"];
$insertar_datos = mysqli_query($conexion, "INSERT INTO info_registros VALUES  (NULL,'$numeros_seleccionados','$nombre','$tel','$email','$estado')");

sendSMS($tel,$numeros_seleccionados)
?>