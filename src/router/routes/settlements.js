import CreateSettlements from "../../views/auth/settlements/CreateSettlements.vue";
import IndexSettlements from "../../views/auth/settlements/IndexSettlements.vue";

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
];