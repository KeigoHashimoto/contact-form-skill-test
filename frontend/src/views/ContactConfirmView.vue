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
    router.push('/complete');
  } catch (e) {
    console.log(e)
  } 
}

const backBtnClick = () => {
  // 入力画面に遷移
  router.push('/');
}

onMounted(() => {
  initializeContactForm();
})
</script>

<template>
  <div class="container">
    <h1>スキルテスト - 確認画面</h1>
    <div>
      <div class="form-block">
        <label for="name">氏名: </label><br>
        <span class="confirm-content">{{ contactForm.name }}</span>
      </div>
      <div class="form-block">
        <label for="email">メールアドレス: </label><br>
        <span class="confirm-content">{{ contactForm.email }}</span>
      </div>
      <div class="form-block">
        <label for="content">お問い合わせ内容: </label><br>
        <span class="confirm-content">{{ contactForm.content }}</span>
      </div>
      <div>
        <button @click="submitBtnClick" class="submit-btn">
          送信
        </button>

        <button @click="backBtnClick" class="back-btn">
          戻る
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.back-btn {
  margin-left: 12px;
}

.confirm-content {
  padding: 4px 6px;
  background: #eee;
  border-radius: 5px;
}
</style>
