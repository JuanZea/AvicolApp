import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/guest/Login.vue'
import LayoutGuest from "../views/guest/LayoutGuest.vue";
import Register from "../views/guest/Register.vue";
import LayoutDashboard from "../views/dashboard/LayoutDashboard.vue";
import Home from "../views/dashboard/Home.vue";
import CreateSettlements from "../views/dashboard/settlements/CreateSettlements.vue";
import IndexSettlements from "../views/dashboard/settlements/IndexSettlements.vue";
import CreateBarns from "../views/dashboard/barns/CreateBarns.vue";
import IndexBarns from "../views/dashboard/barns/IndexBarns.vue";
import CreateLots from "../views/dashboard/lots/CreateLots.vue";
import IndexLots from "../views/dashboard/lots/IndexLots.vue";


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



