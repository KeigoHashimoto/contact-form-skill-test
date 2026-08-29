<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;


/**
 * お問い合わせメール送信
 * 開発環境ではMailpitを使用する
 * Mailpit UI: http://localhost:8025/
 */
class ContactMailer {
  public const HOST = 'mailpit';
  public const PORT = 1025;
  public const SMTP_AUTH = false;
  public const CHARSET = 'UTF-8';

  /**
   * メールを送信
   * localhost:8087
   */
  public function sendMail(string $name, string $email, string $content)
  {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = self::HOST;
    $mail->Port = self::PORT;
    $mail->SMTPAuth = self::SMTP_AUTH;
    $mail->CharSet = self::CHARSET;

    $mail->setFrom('noreply@example.com', 'お問い合わせフォーム');
    $mail->addAddress($email, $name);

    $mail->Subject = 'お問い合わせを受け付けました';
    $mail->Body =
        "{$name} 様\n\n"
        . "お問い合わせありがとうございます。\n\n"
        . "お問い合わせ内容\n"
        . "--------------------\n"
        . "{$content}\n";

    $mail->send();
  }
}