<?php

use Twilio\Rest\Client;


function sendSMSPedimento($phone, $numeros)
{
    include '../config/userInfoTwilio.php';
    require '../twilio-php/src/Twilio/autoload.php';
    $account_sid = account_sid;
    $auth_token = auth_token;
    $twilio_number = twilio_number;
    $client = new Client($account_sid, $auth_token);
    $folio = generatePassword(10);
    $client->messages->create(
        '+52' . $phone,
        array(
            'from' => $twilio_number,
            'body' => 'Pedido confirmado, tus boletos son: ' . $numeros . "con número de folio: " . $folio . "|| ¡Procede con el pago para confirmar tus numeros, con el numero de folio con las cuentas que se muestran en el apartado de cuentas bancarias y manda un correo o whatsapp con el comprobante con los números de contacto!"
        )
    );
}

function sendSMSCancelado($phone)
{
    include '../config/userInfoTwilio.php';
    require '../twilio-php/src/Twilio/autoload.php';
    $account_sid = account_sid;
    $auth_token = auth_token;
    $twilio_number = twilio_number;
    $client = new Client($account_sid, $auth_token);
    $client->messages->create(
        '+52' . $phone,
        array(
            'from' => $twilio_number,
            'body' => 'Lo sentimos tu compra ha sido cancelada'
        )
    );
}

function sendSMSPedidoConfirmado($phone)
{
    include '../config/userInfoTwilio.php';
    require '../twilio-php/src/Twilio/autoload.php';
    $account_sid = account_sid;
    $auth_token = auth_token;
    $twilio_number = twilio_number;
    $client = new Client($account_sid, $auth_token);
    $folio = generatePassword(10);
    $client->messages->create(
        '+52' . $phone,
        array(
            'from' => $twilio_number,
            'body' => "Pedido pagado, muchas gracias por la preferencia espera al dia del sorteo para reclamar tu premio"
        )
    );
}

function generatePassword($length)
{
    $key = "";
    $pattern = "1234567890abcdefghijklmnopqrstuvwxyz";
    $max = strlen($pattern) - 1;
    for ($i = 0; $i < $length; $i++) {
        $key .= substr($pattern, mt_rand(0, $max), 1);
    }
    return $key;
}
