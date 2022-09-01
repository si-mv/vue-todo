import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

GITHUB_SECRET = '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'

const pinia = createPinia()

createApp(App)
  .use(pinia)
  .mount('#app')
