<?php
session_start();
include "../config/conexion.php";
include "../models/loginModel.php";
switch ($_POST['action']) {
    case 'login':
        validLoginUser($conexion, $_POST["email"], sha1($_POST["password"]));
        break;
    case 'logout':
        validLogoutUser();
        break;
}
