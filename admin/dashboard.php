<?php
session_start();
include "../config/conexion.php";

if (!isset($_SESSION['usuario'])) {
    header("location: ../admin/index.php");
    session_destroy();
    die();
}

?>

<!doctype html>
<html class="no-js" lang="en">

<head>
    <?php include './assets/statics/head.php'; ?>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>

<body>
    <div id="preloader">
        <div class="loader"></div>
    </div>
    <div class="page-container">
        <?php include './assets/statics/menu.php'; ?>
        <div class="main-content">
            <?php include './assets/statics/header.php'; ?>
            <div class="main-content-inner">
                <?php include './components/Estadisticas.php'; ?>
                <?php include './components/TablaPedidos.php'; ?>
            </div>
        </div>
        <?php include './assets/statics/footer.php'; ?>
    </div>
    <script>
       
    </script>
</body>

</html>