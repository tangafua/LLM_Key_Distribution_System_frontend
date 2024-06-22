import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './assets/main.css';
import store from './store'; // Vuex store

const app = createApp(App);

app.config.globalProperties.$axios = axios;

app.use(router);
app.use(ElementPlus);
app.use(store); 

app.mount('#app');
