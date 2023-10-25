import { createApp } from 'vue'
import router from './router';
import App from './App.vue'
import { app as fb } from '@store/firebase';
import { VueFire, VueFireAuth } from 'vuefire';
import './index.scss'

const app = createApp(App);

app.use(router);
app.use(VueFire, { firebaseApp: fb, modules: [ VueFireAuth() ] });

app.mount('#app')

console.log("Initialized Firebase", fb.name);