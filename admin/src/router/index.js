import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'

import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'

import CoffeeEdit from '../views/CoffeeEdit.vue'
import CoffeeList from '../views/CoffeeList.vue'

import OriginEdit from '../views/OriginEdit.vue'
import OriginList from '../views/OriginList.vue'

import ArticleEdit from '../views/ArticleEdit.vue'
import ArticleList from '../views/ArticleList.vue'

import AdEdit from '../views/AdEdit.vue'
import AdList from '../views/AdList.vue'

import AdminUserEdit from '../views/AdminUserEdit.vue'
import AdminUserList from '../views/AdminUserList.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { isPublic: true },

  },
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      { path: '/categories/create', component: CategoryEdit },
      { path: '/categories/edit/:id', component: CategoryEdit, props:true },
      { path: '/categories/list', component: CategoryList },
      
      { path: '/coffees/create', component: CoffeeEdit },
      { path: '/coffees/edit/:id', component: CoffeeEdit, props:true },
      { path: '/coffees/list', component: CoffeeList },
      
      { path: '/origins/create', component: OriginEdit },
      { path: '/origins/edit/:id', component: OriginEdit, props:true },
      { path: '/origins/list', component: OriginList },
      
      { path: '/articles/create', component: ArticleEdit },
      { path: '/articles/edit/:id', component: ArticleEdit, props:true },
      { path: '/articles/list', component: ArticleList },
      
      { path: '/ads/create', component: AdEdit },
      { path: '/ads/edit/:id', component: AdEdit, props:true },
      { path: '/ads/list', component: AdList },
      
      { path: '/admin_users/create', component: AdminUserEdit },
      { path: '/admin_users/edit/:id', component: AdminUserEdit, props:true },
      { path:'/admin_users/list', component: AdminUserList },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login')
  }
  next()
})

export default router
