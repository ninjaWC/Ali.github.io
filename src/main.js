import './assets/main.css'
import * as Vue from 'vue'
import { createApp } from 'vue'
import store from './store.js'
import App from './App.vue'
import router from './router/routes.js'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')

