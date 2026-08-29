<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;

/**
 * お問い合わせ入力チェック
 */
class ContactValidate {
  /**
   * メールを送信
   * localhost:8087
   */
  public function contactFormValidate(string $name, string $email, string $content)
  {
    if (
        empty($name) ||
        empty($email) ||
        empty($content)
    ) {
      return True;
    }

    if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
      return True;
    }

    return False;
  }
}