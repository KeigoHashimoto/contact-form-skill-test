import type { ContactForm } from '@/types/contact'

export const sendContactForm = async (form: ContactForm): Promise<void> => {
  const response = await fetch('/api/contact.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  })

  if (!response.ok) {
    throw new Error('お問い合わせの送信に失敗しました。')
  }
}