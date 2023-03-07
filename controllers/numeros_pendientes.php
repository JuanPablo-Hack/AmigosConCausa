<?php

include "../config/conexion.php";

$numerosSeleccionados = mysqli_query($conexion," SELECT numeros_seleccionado from info_registros where id_estado != '3' ");
$total_rows = $numerosSeleccionados->num_rows;

if($total_rows > 0 ){
    while ($row = $numerosSeleccionados -> fetch_object()){
        $data[] = $row;
    }
    echo(json_encode($data));
}


?>