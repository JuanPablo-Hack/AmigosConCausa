<section id="hero" class="section">
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <div class="herotext">
                    <h1 class="wow bounceInDown" data-wow-duration="1s" data-wow-delay="0.1s">
                        RIFA ENTRE AMIGOS
                        <span class="lighter"> MANZANILLO, CENTRO</span>
                    </h1>
                    <p class="lead wow zoomIn" data-wow-duration="2s" data-wow-delay="0.5s">
                        Adquiere tus números de boletos para ayudar a personas en situaciones de
                        peligro para brindarles una mejor oportunidad de vida.
                    </p>
                </div>
            </div>
            <div class="col-md-7"></div>

            <input type="checkbox" id="btn-modal" />
            <div class="container-modal">
                <div class="content-modal">
                    <p class="btns">
                        <label for="btn-modal" class="btn btn-light" role="button">
                            << </label>

                                <label class="btn btn-default btn-lg wow fadeInRight" role="button" onclick="newNumbers()">
                                    Volver a tirar
                                </label>
                    </p>
                    <h2 class="lighter" id="number">
                        <h1 id="number2"></h1>
                    </h2>
                    <p class="lead" id="txt-boleto">
                        ¡Tu boleto es unico y es generado aleatoriamente!. para
                        continuar tu registro completa el siguiente formulario
                    </p>
                    <form id="contact" name="contact" method="post" class="text-left">
                        <fieldset>
                            <div class="row">
                                <div class="col-md-4 wow fadeIn animated animated" data-wow-delay="0.1s" data-wow-duration="2s">
                                    <label for="name">
                                        Nombre
                                        <span class="required">*</span>
                                    </label>
                                    <input type="text" name="name" id="name2" size="30" value="" required />
                                </div>
                                <div class="col-md-4 wow fadeIn animated" data-wow-delay="0.3s" data-wow-duration="2s">
                                    <label for="email">
                                        Email
                                        <span class="required">*</span>
                                    </label>
                                    <input type="text" name="email" id="email2" size="30" value="" required />
                                </div>
                                <div class="col-md-4 wow fadeIn animated" data-wow-delay="0.3s" data-wow-duration="2s">
                                    <label for="phone">Teléfono</label>
                                    <input type="text" name="phone" id="phone2" size="30" value="" />
                                </div>
                            </div>
                            <div class="wow fadeIn animated" data-wow-delay="0.3" data-wow-duration="1.5s">
                                <input id="submit2" type="submit" name="submit" value="Send" onclick="addNumbers()" />
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>