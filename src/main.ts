
import './sass/app.scss';

import { createApp } from 'vue'
import App from './App.vue';
import pinia from './vue/stores';

createApp(App).use(pinia).mount('#app');
