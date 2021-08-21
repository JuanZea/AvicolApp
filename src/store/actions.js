import "./../../firebase.config"
import firebase from "firebase/app";

export default {
    async initialize () {
        const user = await firebase.getCurrentUser();
    },
    loading ({commit}, bool) {
        commit('set', {key: 'loading', value: bool});
    }
}