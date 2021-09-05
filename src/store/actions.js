import useSettlements from "../use/useSettlements";
import {_updateAuth} from "../services/avicolappAssembler";

export default {
    async init ({state, dispatch}, user) {
        state.user = user;
        if (user) {
            _updateAuth(user.uid);
            await dispatch('initSettlement');
        }
    },

    loading ({commit}, bool) {
        commit('set', {key: 'loading', value: bool});
    },

    async initSettlement ({state}) {
        const {activeSettlement} = useSettlements();
        state.settlement = await activeSettlement();
        console.log('initSettlmenets', state);
    }
}