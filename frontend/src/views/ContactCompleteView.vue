<script setup lang="ts">
  import { infoMessages } from '@/constants/messages';
  import { useRouter } from 'vue-router';
  // ルーター
  const router = useRouter();

  /**
   * 要件にはないが、完了画面から戻る
   */
  const backBtnClick = () => {
    // 入力画面に遷移
    router.push('/');
  }
</script>

<template>
  <div class="container">
    <h1>スキルテスト - 完了画面</h1>
    <div>
      <div>
        {{ infoMessages.successContact }}
      </div>
    </div>

    <button @click="backBtnClick" class="back-btn">
      入力画面
    </button>
  </div>
</template>

<style scoped>
.back-btn {
  margin-top: 12px;
}
</style>
