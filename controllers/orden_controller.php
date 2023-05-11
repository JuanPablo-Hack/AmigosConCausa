<?php

switch ($_POST['action']) {
    case 'agregar':
        agregarNumerosSeleccionados($_POST["name"], $_POST["email"], $_POST["phone"], $_POST["numeros"]);
        break;
    case 'cancelar':
        cancelarNumeros($_POST["id"], $_POST["telefono"]);
        break;
    case 'pagar':
        pagarNumeros($_POST["id"], $_POST["telefono"]);
        break;
}

function agregarNumerosSeleccionados($nombre, $email, $telefono, $numeros_seleccionados)
{
    include "sendMessage.php";
    include "../config/conexion.php";
    $SQL = "INSERT INTO `info_registros` (`id`, `numeros_seleccionado`, `nombre`, `tel`, `email`, `id_estado`, `fecha_registro`) VALUES (NULL, '$numeros_seleccionados', '$nombre ', '$telefono', '$email', '1', current_timestamp())";
    $resultado = $conexion->query($SQL);
    sendSMSPedimento($telefono, $numeros_seleccionados);
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
