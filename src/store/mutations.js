export default {
    set(state, payload) {
        state[payload.key] = payload.value;
    }
}