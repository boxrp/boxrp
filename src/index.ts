import { createApp } from 'vue'
import { router } from './router';
import { createPinia } from 'pinia';
import App from './App.vue'
import { app as fb } from '@store/firebase';
import { VueFire, VueFireAuth } from 'vuefire';
import './index.scss'

const pinia = createPinia();
// pinia.use(({ store }) => {
//     store.$router = markRaw(router)
// });

createApp(App)
    .use(VueFire, { firebaseApp: fb, modules: [VueFireAuth()] })
    .use(pinia)
    .use(router)
    .mount('#app');


