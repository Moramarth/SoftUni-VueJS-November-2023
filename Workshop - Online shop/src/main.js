import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './styles/reset.css';
import { useUserStore } from '../src/stores/userStore.js';
import App from './App.vue';
import router from './router/router';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);

const userStore = useUserStore();
userStore.getPersistedProfile();
app.mount('#app');
