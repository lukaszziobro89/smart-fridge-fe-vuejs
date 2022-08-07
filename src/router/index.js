import { createRouter, createWebHistory } from 'vue-router'
import MasterView from '../views/Master'
// import HomeView from '../views/HomeView'
import TestView from "@/views/TestView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: MasterView
    // component: HomeView
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
