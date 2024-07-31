import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import router from './router';
import vue3GoogleLogin from 'vue3-google-login'

createApp(App)
  .use(router).use(vue3GoogleLogin, {
    clientId: '401061488134-t0j9knpdnussa940c8sjkv2d01phhr02.apps.googleusercontent.com'
  })
  .mount('#app');