<?php
use Twilio\Rest\Client;

function sendSMS($tel,$numeros){
    require __DIR__ . '/twilio-php/src/Twilio/autoload.php';
    $account_sid = 'AC33ca75b9f9374df2584752cf94252d76';
    $auth_token = 'c2b2d2f78d4108302ae2a95734fd4858';
    $twilio_number = "+16203372385";
    $client = new Client($account_sid, $auth_token);
    $client->messages->create(
        '+52'.$tel,
        array(
            'from' => $twilio_number,
            'body' => 'Pedido confirmado, tus boletos son: '.$numeros. "|| ¡Procede con el pago para confirmar tus numeros!"
        )
    );
};

?>