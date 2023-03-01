<?php

include "conexion.php";

$estado= $_POST["estado"];
$estado2 = number_format($estado);
$id = $_POST["id"];

$actualizar = mysqli_query($conexion,"UPDATE info_registros SET id_estado='$estado' WHERE id = '$id' ");

?>