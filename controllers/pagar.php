<?php

include "../admin/conexion.php";

$estado= $_POST["estado"];
$id = $_POST["id"];

$actualizar = mysqli_query($conexion,"UPDATE info_registros SET id_estado='$estado' WHERE id = '$id' ");

?>