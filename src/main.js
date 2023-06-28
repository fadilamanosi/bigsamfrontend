import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'flowbite';

import axios from 'axios'
import VueAxios from 'vue-axios'



axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.baseURL = import.meta.env.VITE_API_URL;


const app = createApp(App)

app.use(createPinia())
app.use(router)

app
.use(VueAxios, axios)
.provide('axios', app.config.globalProperties.axios)

app.mount('#app')
