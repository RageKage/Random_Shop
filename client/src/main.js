import { createApp } from "vue";
import App from "./App.vue";

import menu_Api_Service from "@/services/Service";

import router from "@/router";

import { createPinia } from "pinia";
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

let app = createApp(App).use(Quasar, quasarUserOptions);

app.config.globalProperties.$Service = menu_Api_Service;

app.use(createPinia());

app.use(router);

app.mount("#app");
