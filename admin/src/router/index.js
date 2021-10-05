import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../views/Main.vue'

import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'

import CoffeeEdit from '../views/CoffeeEdit.vue'
import CoffeeList from '../views/CoffeeList.vue'

import OriginEdit from '../views/OriginEdit.vue'
import OriginList from '../views/OriginList.vue'

const routes = [
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
      { path:'/origins/list', component: OriginList },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
