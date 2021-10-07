import { createApp } from 'vue'
import App from './App.vue'

import './assets/scss/style.scss';
import router from './router'

// import Swiper, { Navigation, Pagination } from 'swiper';


createApp(App).use(router).mount('#app')
// Swiper.use([Navigation, Pagination]);
