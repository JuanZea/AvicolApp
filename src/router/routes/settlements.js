import MyFirstSettlement from "../../views/auth/settlements/MyFirstSettlement.vue";

export default [
    {
        name: 'createSettlements',
        path: '/create-settlements',
        meta: { title: 'MI PRIMERA FINCA', noSettlement: true },
        component: MyFirstSettlement,
    },
];