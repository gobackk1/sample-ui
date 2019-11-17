import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/modal',
    name: 'modal',
    component: function () {
      return import('../views/Modal.vue')
    }
  },
  {
    path: '/carousel',
    name: 'carousel',
    component: function () {
      return import('../views/Carousel.vue')
    }
  },
  {
    path: '/tab',
    name: 'tab',
    component: function () {
      return import('../views/Tab.vue')
    }
  },
  {
    path: '/drawer',
    name: 'drawer',
    component: function () {
      return import('../views/Drawer.vue')
    }
  },
  {
    path: '/table',
    name: 'table',
    component: function () {
      return import('../views/Table.vue')
    }
  },
  {
    path: '/lazyload',
    name: 'lazyload',
    component: function () {
      return import('../views/LazyLoad.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
