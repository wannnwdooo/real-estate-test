import '@/assets/css/main.scss'
import '@/assets/css/tooltip.css'

import { createApp } from 'vue'
import App from './App.vue'
import directives from "@/directives";


const app = createApp(App)

Object.keys(directives).forEach((key) => {
  app.directive(key, directives[key])
})

app.mount('#app')
