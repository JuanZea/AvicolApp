import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from "../views/Register.vue";
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
      name: 'login',
      path: '/',
      component: Login,
    },
    {
      name: 'register',
      path: '/register',
      component: Register,
    },
    {
      name: 'layoutDashboard',
      path: '/dashboard',
      component: LayoutDashboard,
      redirect: { name: 'home' },
      children: [
        {
          name: 'home',
          path: '/home',
          component: Home,
        },
        {
          name: 'createSettlements',
          path: '/create-settlements',
          component: CreateSettlements,
        },
        {
          name: 'indexSettlements',
          path: '/my-settlements',
          component: IndexSettlements,
        },
        {
          name: 'createBarns',
          path: '/create-barns',
          component: CreateBarns,
        },
        {
          name: 'indexBarns',
          path: '/my-barns',
          component: IndexBarns,
        },
        {
          name: 'createLots',
          path: '/create-lots',
          component: CreateLots,
        },
        {
          name: 'indexLots',
          path: '/my-lots',
          component: IndexLots,
        }
      ]
    },
  ],
});

export default router



