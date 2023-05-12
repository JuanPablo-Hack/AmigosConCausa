<?php
session_start();
include "../config/conexion.php";
switch ($_POST['action']) {
    case 'login':
        validLoginUser($conexion, $_POST["email"], sha1($_POST["password"]));
        break;
    case 'logout':
        validLogoutUser();
        break;
}
function validLoginUser($conexion, $email, $password)
{
    $resultado = $conexion->query("SELECT * FROM usuarios WHERE correo='$email' and contraseña='$password'");
    if ($resultado) {
        header("location: ../admin/dashboard.php");
        $_SESSION['usuario'] = $email;
        exit();
    }
    header("location: ../admin/login.php");
}

function validLogoutUser()
{
    session_start();
    session_destroy();
    session_abort();
    header("location: ../admin/login.php");
}
