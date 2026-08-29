import { createRouter, createWebHistory } from 'vue-router'
import ContactInputView from '@/views/ContactInputView.vue'
import ContactConfirmView from '@/views/ContactConfirmView.vue'
import ContactCompleteView from '@/views/ContactCompleteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'contact-input',
      component: ContactInputView
    },
    {
      path: '/confirm',
      name: 'contact-confirm',
      component: ContactConfirmView
    },
    {
      path: '/complete',
      name: 'contact-complete',
      component: ContactCompleteView
    }
  ],
})

export default router
