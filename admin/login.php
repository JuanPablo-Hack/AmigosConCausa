<?php

    session_start();

    include 'conexion.php';
    $email = $_POST["email"];
    $password = $_POST["password"];
    $password = hash("sha1",$password);

    $validar_login = mysqli_query($conexion,"SELECT * FROM usuarios WHERE correo='$email' and contraseña='$password'");

    if(mysqli_num_rows($validar_login)>0){
        $_SESSION['usuario'] = $email;
        header("location: ../admin/dashboard.php");
        exit;
    }else{
        echo'
            <script>
                alert("Credenciales incorrectas")
                window.location="../admin/index.php"
            </script>
        ';
        exit;
    }

?>