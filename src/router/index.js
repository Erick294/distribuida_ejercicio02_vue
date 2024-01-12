import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/registro',
    name: 'registro',
    component: () => import(/* webpackChunkName: "BookRegistrar" */ '@/pages/Registro.vue'),
  },
  {
    path: '/listar',
    name: 'listar',
    component: () => import(/* webpackChunkName: "BookListar" */ '@/pages/Listar.vue'),
  },
  {
    path: '/cambiar',
    name: 'cambiar',
    component: () => import(/* webpackChunkName: "BookCambiar" */ '@/pages/ActualizarEliminar.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
