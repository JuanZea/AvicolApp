import useSettlements from "../use/useSettlements";

export default {
    init ({state, dispatch}, user) {
        state.user = user;
        if (user) {
            dispatch('initSettlement');
        }
    },

    loading ({commit}, bool) {
        commit('set', {key: 'loading', value: bool});
    },

    async initSettlement ({state}) {
        console.log('initSettlmenets');
        const {activeSettlement} = useSettlements();
        state.settlement = await activeSettlement();
    }
}