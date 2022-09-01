import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibW9ycGhldXMiLCJpYXQiOjE2NTMxMDI3MzR9.zNYcb1c9v8EO-oszD8cs4LDEzuS-epfQINWHfwQ48SI'

const pinia = createPinia()

createApp(App)
  .use(pinia)
  .mount('#app')
