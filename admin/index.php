<!doctype html>
<html class="no-js" lang="en">

<head>
    <?php include './assets/statics/head.php';  ?>
</head>

<body>
    <div id="preloader">
        <div class="loader"></div>
    </div>
    <div class="login-area login-s2">
        <div class="container">
            <div class="login-box ptb--100">
                <form action="../controllers/loginController.php" method="POST">
                    <input type="hidden" name="action" value="login">
                    <div class="login-form-head">
                        <h4>Iniciar sesión</h4>
                        <p>Bienvenido al sistema administrador, ingresa tus credeciales para ingresar a tu información
                        </p>
                    </div>
                    <div class="login-form-body">
                        <div class="form-gp">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" id="exampleInputEmail1" name="email">
                            <i class="ti-email"></i>
                            <div class="text-danger"></div>
                        </div>
                        <div class="form-gp">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" id="exampleInputPassword1" name="password">
                            <i class="ti-lock"></i>
                            <div class="text-danger"></div>
                        </div>
                        <div class="submit-btn-area">
                            <button id="form_submit" type="submit">Ingresar al sistema <i class="ti-arrow-right"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <script src="assets/js/vendor/jquery-2.2.4.min.js"></script>
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/owl.carousel.min.js"></script>
    <script src="assets/js/metisMenu.min.js"></script>
    <script src="assets/js/jquery.slimscroll.min.js"></script>
    <script src="assets/js/jquery.slicknav.min.js"></script>
    <script src="assets/js/plugins.js"></script>
    <script src="assets/js/scripts.js"></script>
</body>

</html>