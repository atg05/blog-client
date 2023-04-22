import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const app = createApp(App)

app.use(router)

app.mount('#app')
