import { createRouter, createWebHistory } from 'vue-router'
import PrimaryLayout from '../views/authorised/PrimaryLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PrimaryLayout',
      component: PrimaryLayout
    }
  ]
})

export default router
