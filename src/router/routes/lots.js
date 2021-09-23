import IndexBarns from "../../views/auth/barns/IndexBarns.vue";

export default [
    {
        name: 'showLots',
        path: '/my-barn/:id',
        meta: { title: 'MIS GALPONES' },
        component: IndexBarns
    },
];