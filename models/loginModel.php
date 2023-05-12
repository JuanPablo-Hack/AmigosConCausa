<?php
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
