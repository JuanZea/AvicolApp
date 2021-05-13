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
          meta: { title: 'INICIO' },
          component: Home,
        },
        {
          name: 'createSettlements',
          path: '/create-settlements',
          meta: { title: 'CREAR FINCAS' },
          component: CreateSettlements,
        },
        {
          name: 'indexSettlements',
          path: '/my-settlements',
          meta: { title: 'MIS FINCAS' },
          component: IndexSettlements,
        },
        {
          name: 'createBarns',
          path: '/create-barns',
          meta: { title: 'CREAR GALPONES' },
          component: CreateBarns,
        },
        {
          name: 'indexBarns',
          path: '/my-barns',
          meta: { title: 'MIS GALPONES' },
          component: IndexBarns,
        },
        {
          name: 'createLots',
          path: '/create-lots',
          meta: { title: 'CREAR LOTES' },
          component: CreateLots,
        },
        {
          name: 'indexLots',
          path: '/my-lots',
          meta: { title: 'MIS LOTES' },
          component: IndexLots,
        }
      ]
    },
  ],
});

export default router



