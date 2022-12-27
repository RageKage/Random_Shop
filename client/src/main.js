import { createApp } from 'vue'
import App from './App.vue'

import menu_Api_Service from '@/services/Service'

import router from '@/router'


let app = createApp(App)

app.config.globalProperties.$Service = menu_Api_Service

app.use(router)

app.mount('#app')
