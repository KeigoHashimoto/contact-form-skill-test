export const errorMessages = {
  required: '必須項目です。',
  invalidEmail: 'メールアドレスの形式が正しくありません。',
}

export const infoMessages = {
  successContact: 'お問い合わせが送信されました。'
}

export const serverErrorMessages: Record<number, string> = {
  400: 'リクエスト内容が不正です。',
  405: '許可されていないリクエストです。',
  422: '入力内容に誤りがあります。',
  500: 'サーバー内部でエラーが発生しました。',
}