import Layout from "../../views/auth/Layout.vue";
import Home from "../../views/auth/Home.vue";
import MyAccount from "../../views/auth/MyAccount.vue";
import { init, isAuth, needSettlement } from "../middlewares";
import settlements from "./settlements";
import barns from "./barns";
import lots from "./lots";

const children =  [
    {
        name: 'home',
        path: '/home',
        meta: { title: 'INICIO' },
        component: Home
    },
    ...settlements,
    ...barns,
    ...lots,
    {
        name: 'myAccount',
        path: '/my-account',
        meta: { title: 'MI CUENTA' },
        component: MyAccount
    }
];

export default [
    {
        path: '/',
        component: Layout,
        redirect: { name: 'home' },
        beforeEnter: [init],
        children: children.map(route => {
            route.beforeEnter = [isAuth, needSettlement].concat(route.beforeEnter || []);
            return route;
        })
    }
];