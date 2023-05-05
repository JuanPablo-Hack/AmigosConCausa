<?php

use Twilio\Rest\Client;

$tel = $_POST['tel'];
require __DIR__ . '/twilio-php/src/Twilio/autoload.php';
$account_sid = 'AC33ca75b9f9374df2584752cf94252d76';
$auth_token = '2054d9e2a7908151400e32cd803c665e';
$twilio_number = "+16203372385";
$client = new Client($account_sid, $auth_token);
$client->messages->create(
    '+52' . $tel,
    array(
        'from' => $twilio_number,
        'body' => 'Compra confirmado, tu compra esta asegurada'
    )
);