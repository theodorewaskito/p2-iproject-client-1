import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import DetailPage from '../views/DetailPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("access_token")) {
        next({ name: 'HomePage'})
      } else {
        next()
      }
    }
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("access_token")) {
        next({ name: 'HomePage'})
      } else {
        next()
      }
    }
  },
  {
    path: '/detail/:i',
    name: 'DetailPage',
    component: DetailPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
