export interface ContactForm {
  name: string,
  email: string,
  content: string
}

export interface ContactFormErrors {
  name: Array<string>,
  email: Array<string>,
  content: Array<string>
}