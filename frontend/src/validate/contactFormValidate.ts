import { errorMessages } from "@/constants/messages";
import type { ContactForm, ContactFormErrors } from "@/types/contact";

/**
 * 値が存在することを確認
 * @param str 文字列
 * @returns 存在する場合true
 */
const requireCheck = (str: string): boolean => {
  return str != '';
}

/**
 * メールアドレス形式チェック
 * @param email メールアドレス
 * @returns 形式が正しい場合 true
 */
const emailFormatCheck = (email: string): boolean => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  return pattern.test(email)
}


export const contactFormValidate = (form: ContactForm, errors: ContactFormErrors): boolean => {
  let errorFlg = false;

  // エラーメッセージ初期化
  errors.name = [];
  errors.email = [];
  errors.content = [];

  // 名前必須チェック
  if (!requireCheck(form.name)) {
    errors.name.push(errorMessages.required);
    errorFlg = true;
  }

  // メールアドレス必須チェック
  if (!emailFormatCheck(form.email)) {
    errors.email.push(errorMessages.invalidEmail);
    errorFlg = true;
  }

  // メールアドレス形式チェック
  if (!requireCheck(form.email)) {
    errors.email.push(errorMessages.required);
    errorFlg = true;
  }

  // 内容必須チェック
  if (!requireCheck(form.content)) {
    errors.content.push(errorMessages.required);
    errorFlg = true;
  }

  return errorFlg;
}