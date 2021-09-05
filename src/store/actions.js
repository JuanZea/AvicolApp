export default {
    loading ({commit}, bool) {
        commit('set', {key: 'loading', value: bool});
    }
}