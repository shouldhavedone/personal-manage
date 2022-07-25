import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import pinia from './store'

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'normalize.css/normalize.css';
import '@/styles/index.scss'

const app = createApp(App)


app
  .use(pinia)
  .use(router)
  .use(ElementPlus)
  .mount("#app");
