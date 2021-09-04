import { createRouter, createWebHistory } from 'vue-router'
import LoginAndRegister from '../views/guest/LoginAndRegister.vue'
import auth from "./routes/auth";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginAndRegister,
    },
    {
      path: '/register',
      name: 'register',
      component: LoginAndRegister,
    },
    ...auth,
  ],
});

export default router;