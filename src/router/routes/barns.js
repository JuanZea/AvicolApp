import IndexBarns from "../../views/auth/barns/IndexBarns.vue";
import ShowBarns from "../../views/auth/barns/ShowBarns.vue";

export default [
    {
        name: 'indexBarns',
        path: '/my-barns',
        meta: { title: 'MIS GALPONES' },
        component: IndexBarns
    },
    {
        name: 'showBarns',
        path: '/barn/:id',
        meta: { title: 'GALPÓN' },
        component: ShowBarns
    },
];