import { createApp, reactive } from 'vue'
// import { createApp } from 'vue/dist/vue.esm-bundler' // <--- 1
import { createPinia } from 'pinia'
import i18n from "./i18n" // <--- 2

import App from './App.vue'
import router from './router'

import './index.css'

const GStore = reactive({ flashMessage: ''})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.provide('GStore', GStore)

app.mount('#app')
