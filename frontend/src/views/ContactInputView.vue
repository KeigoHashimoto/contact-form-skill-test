<script setup lang="ts">
import { useContactForm } from '@/composables/useContactForm';
import { useRouter } from 'vue-router';
import { CONTACT_SESSION_KEY } from '@/constants/constants';
import { onMounted } from 'vue';
import { contactFormValidate } from '@/validate/contactFormValidate';

// ルーター
const router = useRouter();

// 状態管理
const { contactForm, contactFormErrors, serverError, initializeContactForm } = useContactForm();

// 確認ボタン押下
const confirmBtnClick = () => {
  // 入力チェック
  if (contactFormValidate(contactForm, contactFormErrors)) return;

  // セッションストレージに保存
  sessionStorage.setItem(CONTACT_SESSION_KEY, JSON.stringify(contactForm));

  // 画面遷移
  router.push('/confirm')
}

onMounted(() => {
  initializeContactForm()
})

</script>

<template>
  <div class="container">
    <h1>スキルテスト - 入力画面</h1>
    <div>
      <div class="form-block">
        <label for="name">氏名: </label><br>
        <input type="text" name="name" id="name" v-model="contactForm.name">
        <p 
          class="error"
          v-if="contactFormErrors.name.length > 0"        
          v-for="(err, i) in contactFormErrors.name" 
          :key="i">
          {{ err }}
        </p>    
      </div>
      <div class="form-block">
        <label for="email">メールアドレス: </label><br>
        <input type="text" name="email" id="email" v-model="contactForm.email">
        <p 
          class="error"
          v-if="contactFormErrors.email.length > 0"        
          v-for="(err, i) in contactFormErrors.email" 
          :key="i">
          {{ err }}
        </p>
      </div>
      <div class="form-block">
        <label for="content">お問い合わせ内容: </label><br>
        <textarea name="content" id="content" v-model="contactForm.content"></textarea>
        <p 
          class="error"
          v-if="contactFormErrors.content.length > 0" 
          v-for="(err, i) in contactFormErrors.content" 
          :key="i">
          {{ err }}
        </p>
      </div>
      <div>
        <button @click="confirmBtnClick" class="submit-btn">
          確認
        </button>
      </div>
      <span class="error" v-if="serverError">{{ serverError }}</span>
    </div>
  </div>
  
</template>

<style scoped>

</style>
