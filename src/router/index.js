import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/login', name: 'Login', component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue') },
  { path: '/', name: 'Home', component: Home },
  { path: '/cart', name: 'Cart', component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue') },
  { path: '/courses', name: 'Courses', component: () => import(/* webpackChunkName: "courses" */ '../views/Courses.vue') },
  { path: '/instructor', name: 'Team', component: () => import(/* webpackChunkName: "team" */ '../views/Team.vue') },
  { path: '/reviews', name: 'Reviews', component: () => import(/* webpackChunkName: "reviews" */ '../views/Reviews.vue') },
  { path: '/contact', name: 'Contact', component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue') },
]

const router = new VueRouter({
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
