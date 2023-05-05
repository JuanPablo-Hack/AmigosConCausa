<?php

use Twilio\Rest\Client;

function sendSMS($phone, $numeros)
{
    require __DIR__ . '/twilio-php/src/Twilio/autoload.php';
    $account_sid = 'AC33ca75b9f9374df2584752cf94252d76';
    $auth_token = '2054d9e2a7908151400e32cd803c665e';
    $twilio_number = "+16203372385";
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
