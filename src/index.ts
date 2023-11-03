import { createApp } from 'vue'
import { router } from './router';
import { createPinia } from 'pinia';
import App from './App.vue'
import { app as fb } from '@store/firebase';
import { VueFire, VueFireAuth } from 'vuefire';
import './index.scss'

createApp(App)
    .use(router)
    .use(VueFire, { firebaseApp: fb, modules: [ VueFireAuth() ] })
    .use(createPinia())
    .mount('#app');

// const pinia = createPinia();

// app.use(router);
// app.use(VueFire, { firebaseApp: fb, modules: [ VueFireAuth() ] });
// app.use(pinia);

// app.mount('#app')

