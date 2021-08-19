import Layout from "../../views/auth/Layout.vue";
import Home from "../../views/auth/Home.vue";
import CreateSettlements from "../../views/auth/settlements/CreateSettlements.vue";
import IndexSettlements from "../../views/auth/settlements/IndexSettlements.vue";
import CreateBarns from "../../views/auth/barns/CreateBarns.vue";
import IndexBarns from "../../views/auth/barns/IndexBarns.vue";
import CreateLots from "../../views/auth/lots/CreateLots.vue";
import IndexLots from "../../views/auth/lots/IndexLots.vue";

const children = [
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
];

const routes = [
    {
        path: '/',
        component: Layout,
        redirect: { name: 'home' },
        children: children
    },
];

export default routes;