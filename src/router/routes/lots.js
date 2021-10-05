import ShowLots from "../../views/auth/lots/ShowLots.vue";

export default [
    {
        name: 'showLots',
        path: '/lot/:id',
        meta: { title: 'MI LOTE' },
        component: ShowLots
    },
];