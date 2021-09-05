import CreateSettlements from "../../views/auth/settlements/CreateSettlements.vue";
import IndexSettlements from "../../views/auth/settlements/IndexSettlements.vue";
import MyFirstSettlement from "../../views/auth/settlements/MyFirstSettlement.vue";

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
        meta: { title: 'MI PRIMERA FINCA' },
        component: MyFirstSettlement,
    },
];