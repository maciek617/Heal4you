import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import default styles from main.css
import './assets/main.css';

createApp(App).use(router).mount('#app');
