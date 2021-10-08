import { createApp } from 'vue'
import App from './App.vue'

import './assets/scss/style.scss';
import router from './router'

import brands from '@fortawesome/fontawesome-free/js/brands'
import solid from '@fortawesome/fontawesome-free/js/solid'
import fontawesome from '@fortawesome/fontawesome-free/js/fontawesome'

import Card from './components/Card.vue'
import ListCard from './components/ListCard.vue'
// createApp.component('m-card', Card)

import axios from 'axios'

const app = createApp(App).use(router)
app.component('m-card', Card)
app.component('m-list-card', ListCard)
app.mount('#app')

app.config.globalProperties.$http = axios.create({
    baseURL: 'http://localhost:3000/web/api'
})


// Swiper.use([Navigation, Pagination]);
