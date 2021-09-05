import Layout from "../../views/auth/Layout.vue";
import Home from "../../views/auth/Home.vue";
import CreateBarns from "../../views/auth/barns/CreateBarns.vue";
import IndexBarns from "../../views/auth/barns/IndexBarns.vue";
import CreateLots from "../../views/auth/lots/CreateLots.vue";
import IndexLots from "../../views/auth/lots/IndexLots.vue";
import MyAccount from "../../views/auth/MyAccount.vue";
import settlements from "./settlements";
import {init, isAuth, needSettlement} from "../middlewares";

const children =  [
    {
        name: 'home',
        path: '/home',
        meta: { title: 'INICIO' },
        component: Home
    },
    ...settlements,
    {
        name: 'createBarns',
        path: '/create-barns',
        meta: { title: 'CREAR GALPONES' },
        component: CreateBarns
    },
    {
        name: 'indexBarns',
        path: '/my-barns',
        meta: { title: 'MIS GALPONES' },
        component: IndexBarns
    },
    {
        name: 'createLots',
        path: '/create-lots',
        meta: { title: 'CREAR LOTES' },
        component: CreateLots
    },
    {
        name: 'indexLots',
        path: '/my-lots',
        meta: { title: 'MIS LOTES' },
        component: IndexLots
    },
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