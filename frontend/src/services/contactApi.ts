import { errorMessages, serverErrorMessages } from '@/constants/messages';
import type { ContactForm } from '@/types/contact'

export const sendContactForm = async (form: ContactForm, serverError: string): Promise<void> => {
  const response = await fetch('/api/contact.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  })
  let err: boolean = false
  if (response.status !== 204) {
    err = true;
  }

  if (err) {
    serverError.value = serverErrorMessages[response.status] ?? '不明なエラーが発生しました。';
    throw new Error("お問い合わせの送信に失敗しました。");
  }
}