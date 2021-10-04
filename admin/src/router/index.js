import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      { path:'/categories/create', component: CategoryEdit }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
