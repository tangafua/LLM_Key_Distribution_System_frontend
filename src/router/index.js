import { createRouter, createWebHistory } from 'vue-router'
import user_info from '../views/user/user_info.vue'
import user_topup from '../views/topup/topupPage.vue'
import user_record from '../views/record/user_record.vue'
import user_card from '../views/card/user_card.vue'
import user_login from '../views/login/user_login.vue'
import user_model from '../views/model/user_model.vue'

import admin_login from '../views/login/admin_login.vue'
import admin_model from '../views/model/admin_model.vue'
import admin_card from '../views/card/admin_card.vue'
import admin_record from '../views/record/admin_record.vue'
import admin_info from '../views/user/admin_info.vue'

import Notice from '../views/notice/user_notice.vue'
import Index from '../views/login/index.vue'


const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/user_login',
    name: 'user_login',
    component: user_login
  },
  {
    path: '/user_model',
    name: 'user_model',
    component: user_model
  },
  {
    path: '/user_info',
    name: 'user_info',
    component:user_info 
  },
  {
    path: '/user_card',
    name: 'user_card',
    component:user_card 
  },
  {
    path: '/user_topup',
    name: 'user_topup',
    component: user_topup
  },
  {
    path: '/user_record',
    name: 'user_record',
    component: user_record
  },
  {
    path: '/user_notice',
    name: 'user_notice',
    component: Notice
  },
  {
    path: '/admin_login',
    name: 'admin_login',
    component: admin_login
  },
  {
    path: '/admin_model',
    name: 'admin_model',
    component: admin_model
  },
  {
    path: '/admin_card',
    name: 'admin_card',
    component: admin_card
  },
  {
    path: '/admin_record',
    name: 'admin_record',
    component: admin_record
  },
  {
    path: '/admin_info',
    name: 'admin_info',
    component: admin_info
  },
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
