<?php

include "../sendSMS.php";
include "../config/conexion.php";

$nombre = $_POST["name"];
$email = $_POST["email"];
$tel = $_POST["phone"];
$numeros_seleccionados = $_POST["numerc2b2d2f78d4108302ae2a95734fd4858os"];

$SQL = "INSERT INTO `info_registros` (`id`, `numeros_seleccionado`, `nombre`, `tel`, `email`, `id_estado`, `fecha_registro`) VALUES (NULL, '$numeros_seleccionados', '$nombre ', '$tel', '$email', '1', current_timestamp())";
$resultado = $conexion->query($SQL);

sendSMS($tel,$numeros_seleccionados);

?>
