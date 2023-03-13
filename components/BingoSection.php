<section id="bingo" class="parallax section" style="background-image: url(./assets/img/trebol.jpg)">
    <div class="wrapsection">
        <div class="parallax-overlay" style="background-color: #01b0d1; opacity: 0.9"></div>

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div id="containerBingo">
                        <div class="maintitle">
                            <h3 class="section-title">Bingo</h3>
                        </div>
                        <div id="containerT"></div>
                    </div>
                    <form id="Form_Orden" name="Form_Orden" method="post" class="text-left">
                        <fieldset>
                            <div class="row">
                                <div class="col-md-4 wow fadeIn animated animated" data-wow-delay="0.1s" data-wow-duration="2s">
                                    <label for="name">
                                        Nombre
                                        <span class="required">*</span>
                                    </label>
                                    <input type="text" name="name" id="name" size="30" value="" required />
                                </div>
                                <div class="col-md-4 wow fadeIn animated" data-wow-delay="0.3s" data-wow-duration="2s">
                                    <label for="email">
                                        Email
                                        <span class="required">*</span>
                                    </label>
                                    <input type="text" name="email" id="email" size="30" value="" required />
                                </div>
                                <div class="col-md-4 wow fadeIn animated" data-wow-delay="0.3s" data-wow-duration="2s">
                                    <label for="phone">Teléfono</label>
                                    <input type="text" name="phone" id="phone" size="30" value="" />
                                </div>
                                <div>
                                    <input type="hidden" name="numeros" id="numeros" value="1" />
                                </div>
                            </div>
                            <div class="wow fadeIn animated" data-wow-delay="0.3" data-wow-duration="1.5s">
                                <input id="submit2" type="submit" name="submit" value="Send" />
                            </div>
                        </fieldset>
                    </form>
                    <div id="success">
                        <p class="contactalert">
                            ¡Tu mensaje fue enviado con éxito! estaré en contacto tan
                            pronto como puedo.
                        </p>
                    </div>
                    <div id="error">
                        <p class="contactalert">
                            Algo salió mal, intente actualizar y enviar el formulario de
                            nuevo.
                        </p>
                    </div>
                </div>
            </div>
        </div>+

    </div>
</section>