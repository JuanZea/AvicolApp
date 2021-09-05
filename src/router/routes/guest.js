import {init, isGuest} from "../middlewares";
import LoginAndRegister from "../../views/guest/LoginAndRegister.vue";

export default [
    {
      path: '/',
      name: 'login',
      component: LoginAndRegister,
      beforeEnter: [init, isGuest]
    },
    {
      path: '/register',
      name: 'register',
      component: LoginAndRegister,
      beforeEnter: [init, isGuest]
    }
];