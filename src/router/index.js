import { createRouter, createWebHistory } from 'vue-router'
import Login from './components'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'layoutGuest',
      component: LayoutGuest,
      redirect: { name: 'login' },
      children: [
        {
          path: 'login',
          name: 'login',
          component: Login,
        },
        {
          path: 'register',
          name: 'register',
          component: Register,
        },
      ]
    },
    {
      path: '/dashboard',
      name: 'layoutDashboard',
      component: LayoutDashboard,
      redirect: { name: 'home' },
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home,
        },
        {
          path: '/create-settlements',
          name: 'createSettlements',
          component: CreateSettlements,
        },
        {
          path: '/my-settlements',
          name: 'indexSettlements',
          component: IndexSettlements,
        },
        {
          path: '/create-barns',
          name: 'createBarns',
          component: CreateBarns,
        },
        {
          path: '/my-barns',
          name: 'indexBarns',
          component: IndexBarns,
        },
        {
          path: '/create-lots',
          name: 'createLots',
          component: CreateLots,
        },
        {
          path: '/my-lots',
          name: 'indexLots',
          component: IndexLots,
        }
      ]
    },
  ],
});

export default router



