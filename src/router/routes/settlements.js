import CreateSettlements from "../../views/auth/settlements/CreateSettlements.vue";
import IndexSettlements from "../../views/auth/settlements/IndexSettlements.vue";
import ShowSettlements from "../../views/auth/settlements/ShowSettlements.vue";

export default [
    {
        name: 'indexSettlements',
        path: '/my-settlements',
        meta: { title: 'MIS FINCAS' },
        component: IndexSettlements,
    },
    {
        name: 'createSettlements',
        path: '/create-settlements',
        meta: { title: 'CREAR FINCAS' },
        component: CreateSettlements,
    },
    {
        name: 'showSettlements',
        path: '/show-settlements',
        meta: { title: 'MOSTRAR FINCAS' },
        component: ShowSettlements,
    }
];