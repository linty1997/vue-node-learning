import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import router from './router'
import http from './http.js'


const app = createApp(App).use(router)
installElementPlus(app)
app.mount('#app')

app.config.globalProperties.$http = http