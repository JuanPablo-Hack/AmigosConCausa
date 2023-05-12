<?php
include "sendMessage.php";
include "../config/conexion.php";
include "../models/ordenModel.php";

switch ($_POST['action']) {
    case 'agregar':
        $generar_folio = generatePassword(10);
        agregarNumerosSeleccionados($conexion, $_POST["name"], $_POST["email"], $_POST["phone"], $_POST["numeros"], $generar_folio);
        sendSMSPedimento($_POST["phone"], $_POST["numeros"], $generar_folio);
        break;
    case 'cancelar':
        cancelarNumeros($conexion, $_POST["id"]);
        sendSMSCancelado($_POST["telefono"]);
        break;
    case 'pagar':
        pagarNumeros($conexion, $_POST["id"]);
        sendSMSPedidoConfirmado($_POST["telefono"]);
        break;
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