import { createApp } from 'vue'
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue'
import { auth, app as fb } from '@stores/firebase';
import './index.scss'

const pinia = createPinia()
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app')

console.log("Initialized Firebase", fb.name, auth.name);