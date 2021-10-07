import { createApp } from 'vue'
import App from './App.vue'

import './assets/scss/style.scss';
import router from './router'

import brands from '@fortawesome/fontawesome-free/js/brands'
import solid from '@fortawesome/fontawesome-free/js/solid'
import fontawesome from '@fortawesome/fontawesome-free/js/fontawesome'

import Card from './components/Card.vue'
// createApp.component('m-card', Card)

createApp(App).use(router).component('m-card', Card).mount('#app')

// Swiper.use([Navigation, Pagination]);
