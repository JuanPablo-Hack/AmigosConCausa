<?php
use Twilio\Rest\Client;

function sendSMS($phone,$numeros){
    // Include the bundled autoload from the Twilio PHP Helper Library
require __DIR__ . '/twilio-php/src/Twilio/autoload.php';
// Your Account SID and Auth Token from twilio.com/console
$account_sid = 'AC33ca75b9f9374df2584752cf94252d76';
$auth_token = '78f5cebeb0d920e71ecaa0146f3330a3';
// In production, these should be environment variables. E.g.:
// $auth_token = $_ENV["TWILIO_ACCOUNT_SID"]
// A Twilio number you own with SMS capabilities
$twilio_number = "+16203372385";
$client = new Client($account_sid, $auth_token);
$client->messages->create(
    // Where to send a text message (your cell phone?)
    '+52'.$phone,
    array(
        'from' => $twilio_number,
        'body' => 'Pedido confirmado, tus boles son: '.$numeros. "|| ¡Procede con el pago para confirmar tus numeros!."
    )
);
}
?>