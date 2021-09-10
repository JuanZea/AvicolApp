import store from "../store";
import router from "../router";
import {getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut} from "firebase/auth";

const register = (name, email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
                router.push({name: 'home'});
            }).catch(console.log);
        }).catch(console.log);
}

const login = (email, password) => {
    store.dispatch('loading', 'Iniciando Sesión');
    signInWithEmailAndPassword(getAuth(), email, password)
        .then(() => {
            router.push({name: 'home'});
            store.dispatch('loading', false);
        }).catch(console.log);
}

const logout = () => {
    signOut(getAuth()).then(() => {
        router.push({name: 'login'});
    }).catch(console.log);
}

export default function useAuthentication() {
    return {
        register,
        login,
        logout
    }
}