import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router/router'
import axios from "axios"


const pinia = createPinia()
const app = createApp(App)

app.use(router,pinia)
app.mount('#app')

// createApp(App).mount('#app')
