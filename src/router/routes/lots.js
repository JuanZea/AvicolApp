import ShowLots from "../../views/auth/lots/ShowLots.vue";

export default [
    {
        name: 'showLots',
        path: '/barns/:barn/lots/:id',
        meta: { title: 'LOTES' },
        component: ShowLots
    },
];