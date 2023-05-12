<?php

switch ($_POST['action']) {
    case 'agregar':
        agregarNumerosSeleccionados($_POST["name"], $_POST["email"], $_POST["phone"], $_POST["numeros"], generatePassword(10));
        break;
    case 'cancelar':
        cancelarNumeros($_POST["id"], $_POST["telefono"]);
        break;
    case 'pagar':
        pagarNumeros($_POST["id"], $_POST["telefono"]);
        break;
}

function agregarNumerosSeleccionados($nombre, $email, $telefono, $numeros_seleccionados, $folio)
{
    include "sendMessage.php";
    include "../config/conexion.php";
    $SQL = "INSERT INTO `info_registros` (`id`, `numeros_seleccionado`, `nombre`, `tel`, `email`,`folio`, `id_estado`, `fecha_registro`) VALUES (NULL, '$numeros_seleccionados', '$nombre ', '$telefono', '$email','$folio', '1', current_timestamp())";
    $resultado = $conexion->query($SQL);
    sendSMSPedimento($telefono, $numeros_seleccionados, $folio);
}

function cancelarNumeros($id, $telefono)
{
    include "sendMessage.php";
    include "../config/conexion.php";
    sendSMSCancelado($telefono);
    $actualizar = mysqli_query($conexion, "DELETE FROM info_registros WHERE id = '$id'");
    echo 1;
}

function pagarNumeros($id, $telefono)
{
    include "sendMessage.php";
    include "../config/conexion.php";
    $actualizar = mysqli_query($conexion, "UPDATE info_registros SET id_estado=2 WHERE id = '$id'");
    sendSMSPedidoConfirmado($telefono);
    echo 1;
}

function generatePassword($length)
{
    $key = "";
    $pattern = "1234567890abcdefghijklmnopqrstuvwxyz";
    $max = strlen($pattern) - 1;
    for ($i = 0; $i < $length; $i++) {
        $key .= substr($pattern, mt_rand(0, $max), 1);
    }
    return $key;
}
