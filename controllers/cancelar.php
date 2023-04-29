<?php

include "../config/conexion.php";
$id = $_POST["id"];
$actualizar = mysqli_query($conexion, "UPDATE info_registros SET id_estado=3 WHERE id = '$id'");