<div class="row mt-5 mb-5">
    <div class="col-12">
        <div class="card">
            <div class="card-body">
                <div class="d-sm-flex justify-content-between align-items-center">
                    <h4 class="header-title mb-0">Estado de compra de boletos</h4>
                </div><br>
                <button onclick="reiniciarNumeros()">Reiniciar Números</button> <br>
                <div class="market-status-table mt-4">
                    <div class="table-responsive">
                        <table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered" id="hidden-table-info">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th style="display: none;">Números</th>
                                    <th class="hidden-phone">Folio Identificador</th>
                                    <th class="hidden-phone">Nombre</th>
                                    <th class="hidden-phone">Télefono</th>
                                    <th class="hidden-phone">Correo</th>
                                    <th style="display: none;">Fecha Registro</th>
                                    <th style="display: none;">Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                $nPendientes = "SELECT * FROM info_registros";
                                $result = mysqli_query($conexion, $nPendientes);
                                while ($mostar = mysqli_fetch_array($result)) {
                                ?>

                                    <tr>
                                        <td><?php echo $mostar['id'] ?></td>
                                        <td style="display: none;"><?php echo $mostar['numeros_seleccionado'] ?></td>
                                        <td><?php echo $mostar['folio'] ?></td>
                                        <td><?php echo $mostar['nombre'] ?></td>
                                        <td><?php echo $mostar['tel'] ?></td>
                                        <td><?php echo $mostar['email'] ?></td>
                                        <td style="display: none;"><?php echo $mostar['fecha_registro'] ?></td>
                                        <td style="display: none;"><?php if ($mostar['id_estado'] == 1) {
                                                                        echo "pendiente";
                                                                    } else if ($mostar['id_estado'] == 2) {
                                                                        echo "pagado";
                                                                    } else {
                                                                        echo "cancelado";
                                                                    }
                                                                    ?></td>
                                        <td class="containerEstado">
                                            <div class="pagado" onclick="pagar(<?php echo $mostar['id'] ?>,<?php echo $mostar['tel'] ?>,<?php echo $mostar['numeros_seleccionado'] ?>)" id="pagado">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div class="cancelado" onclick="cancelar(<?php echo $mostar['id'] ?>,<?php echo $mostar['tel'] ?>,<?php echo $mostar['numeros_seleccionado'] ?>)" id="cancelado">
                                                <i class="fa-solid fa-trash"></i>
                                            </div>
                                        </td>
                                    </tr>
                                <?php
                                }
                                ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>