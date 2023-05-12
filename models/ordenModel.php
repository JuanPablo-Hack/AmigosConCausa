<?php
function agregarNumerosSeleccionados($conexion, $nombre, $email, $telefono, $numeros_seleccionados, $folio)
{
    $SQL = "INSERT INTO `info_registros` (`id`, `numeros_seleccionado`, `nombre`, `tel`, `email`,`folio`, `id_estado`, `fecha_registro`) 
            VALUES (NULL, '$numeros_seleccionados', '$nombre ', '$telefono', '$email','$folio', '1', current_timestamp())";
    $resultado = $conexion->query($SQL);
}

function cancelarNumeros($conexion, $id)
{
    $resultado = $conexion->query("DELETE FROM info_registros WHERE id = '$id'");
    if ($resultado) echo 1;
}

function pagarNumeros($conexion, $id)
{
    $resultado = $conexion->query("UPDATE info_registros SET id_estado=2 WHERE id = '$id'");
    if ($resultado) echo 1;
}
