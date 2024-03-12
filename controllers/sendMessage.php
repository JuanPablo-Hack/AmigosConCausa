<?php

function sendSMSPedimento($phone, $numeros, $folio)
{
    require_once 'ultramsg.class.php';
    $client = new UltraMsg\WhatsAppApi('3rwpxbzyqqgtm8iq', 'instance80951');
    $to = '+52' . $phone;
    $body =
        'Pedido confirmado. Tus boletos son:  ' .
        $numeros .
        ' con número de folio:  ' .
        $folio .
        ' ¡Procede con el pago para confirmar tus numeros, y contesta este mensaje con el comprobante de pago o deposito junto con el folio que se te asignó y tu nombre completo, no olvides que tienes al menos 24 horas para poder pagar tus números!';
    $client->sendChatMessage($to, $body);
}

function sendSMSCancelado($phone)
{
    require_once 'ultramsg.class.php';
    $client = new UltraMsg\WhatsAppApi('3rwpxbzyqqgtm8iq', 'instance80951');
    $to = '+52' . $phone;
    $body =
        'Lo sentimos pero hemos cancelado tus números particiantes, por los que han sido liberados de nuevo en la tabla';
    $client->sendChatMessage($to, $body);
}

function sendSMSPedidoConfirmado($phone)
{
    require_once 'ultramsg.class.php';
    $client = new UltraMsg\WhatsAppApi('3rwpxbzyqqgtm8iq', 'instance80951');
    $to = '+52' . $phone;
    $body =
        'Pedido pagado, muchas gracias por la preferencia espera al dia del sorteo para reclamar tu premio, y no olvides de tener a la mano tus números participantes';
    $client->sendChatMessage($to, $body);
}
