import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import i18n from './lang/index.js'
import { createPinia } from 'pinia'
import router from './router/index.js'

const app =  createApp(App);
const pinia = createPinia();

app.use(ElementPlus);
app.use(i18n);
app.use(pinia);
app.use(router);
app.mount('#app');
