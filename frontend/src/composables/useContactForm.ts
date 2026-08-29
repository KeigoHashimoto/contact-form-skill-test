import { reactive, ref } from "vue";
import type { ContactForm, ContactFormErrors } from "@/types/contact";
import { CONTACT_SESSION_KEY } from "@/constants/constants";

export const useContactForm = () => {
  // 問い合わせフォーム
  const contactForm = reactive<ContactForm>({
    name: '',
    email: '',
    content: ''
  });

  // 問い合わせフォームのエラー
  const contactFormErrors = reactive<ContactFormErrors>({
    name: [],
    email: [],
    content: []
  });

  const serverError = ref<string>('');

  // 問い合わせフォーム初期化
  // セッションストレージに値があれば使用する
  const initializeContactForm = () => {
    const session = sessionStorage.getItem(CONTACT_SESSION_KEY)

    if (!session) return;

    const sessionForm: ContactForm = JSON.parse(session)

    contactForm.name = sessionForm.name
    contactForm.email = sessionForm.email
    contactForm.content = sessionForm.content
  }

  return {
    contactForm,
    contactFormErrors,
    serverError,
    initializeContactForm
  }
}