<?php

use Twilio\Rest\Client;

include '../config/userInfoTwilio.php';

function sendSMSPedimento($phone, $numeros, $folio)
{
    require '../twilio-php/src/Twilio/autoload.php';
    $client = new Client(account_sid, auth_token);
    $client->messages->create(
        '+52' . $phone,
        array(
            'from' => twilio_number,
            'body' => 'Pedido confirmado, tus boletos son: ' . $numeros . "con número de folio: " . $folio . " || ¡Procede con el pago para confirmar tus numeros, con el numero de folio con las cuentas que se muestran en el apartado de cuentas bancarias y manda un correo o whatsapp con el comprobante con los números de contacto!"
        )
    );
}

function sendSMSCancelado($phone)
{
    require '../twilio-php/src/Twilio/autoload.php';
    $client = new Client(account_sid, auth_token);
    $client->messages->create(
        '+52' . $phone,
        array(
            'from' => twilio_number,
            'body' => 'Lo sentimos tu compra ha sido cancelada'
        )
    );
}

function sendSMSPedidoConfirmado($phone)
{
    require '../twilio-php/src/Twilio/autoload.php';
    $client = new Client(account_sid, auth_token);
    $folio = generatePassword(10);
    $client->messages->create(
        '+52' . $phone,
        array(
            'from' => twilio_number,
            'body' => "Pedido pagado, muchas gracias por la preferencia espera al dia del sorteo para reclamar tu premio"
        )
    );
}
