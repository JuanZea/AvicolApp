import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/guest/Login.vue'
import Register from "../views/guest/Register.vue";
import auth from "./routes/auth";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    ...auth,
  ],
});

export default router;