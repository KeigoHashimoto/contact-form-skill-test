<script setup lang="ts">
import { useContactForm } from '@/composables/useContactForm';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { contactFormValidate } from '@/validate/contactFormValidate';
import { sendContactForm } from '@/services/contactApi';

// ルーター
const router = useRouter();

// 状態管理
const { contactForm, contactFormErrors, initializeContactForm } = useContactForm();

// 送信ボタン押下
const submitBtnClick = async () => {
  // 入力チェック
  if (contactFormValidate(contactForm, contactFormErrors)) {
    router.push('/');
    return;
  };

  try {
    // サーバーに送信
    await sendContactForm(contactForm);

    // 入力フォームクリア
    contactForm.name = '';
    contactForm.email = '';
    contactForm.content = '';
    sessionStorage.clear();

    // 完了画面に遷移
    router.push('/complete')
  } catch (e) {
    console.log(e)
  } 
}

onMounted(() => {
  initializeContactForm();
})
</script>

<template>
  <h1>スキルテスト - 確認画面</h1>
  <div>
    <div>
      <label for="name">氏名: </label><br>
      <span>{{ contactForm.name }}</span>
    </div>
    <div>
      <label for="email">メールアドレス: </label><br>
      <span>{{ contactForm.email }}</span>
    </div>
    <div>
      <label for="content">お問い合わせ内容: </label><br>
      <span>{{ contactForm.content }}</span>
    </div>
    <div>
      <button @click="submitBtnClick">
        送信
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
