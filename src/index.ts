import { createApp } from 'vue'
import { router } from './router';
import { createPinia } from 'pinia';
import App from './App.vue'
import './index.scss'

const pinia = createPinia();

createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app');


