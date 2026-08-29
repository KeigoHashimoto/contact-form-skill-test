<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

require __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../src/Mail/ContactMailer.php';
require_once __DIR__ . '/../src/Validate/ContactValidate.php';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit;
}

$body = file_get_contents('php://input');
$form = json_decode($body, true);

if (!is_array($form)) {
    http_response_code(400);
    exit;
}

$name = $form['name'] ?? '';
$email = $form['email'] ?? '';
$content = $form['content'] ?? '';

try {
  $validate = new ContactValidate();
  if($validate->contactFormValidate($name, $email, $content)) {
    http_response_code(422);
    exit;
  }

  $mailer = new ContactMailer();

  $mailer->sendMail(
    $name,
    $email,
    $content,
  );

  http_response_code(204);
}
catch(Exception $e) {
  http_response_code(500);
}