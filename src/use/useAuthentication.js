import {useStore, useSettlements} from "../use";
import router from "../router";
import {getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {useToast} from "vue-toastification";

const { state } = useStore();
const { refreshActiveSettlement } = useSettlements();
const toast = useToast()

const register = (name, email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then(async () => {
            await refreshActiveSettlement();
            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
                router.push({name: 'home'});
            });
        }).catch(() => {
        toast.error('No fue posible crear este usuario. Intentalo nuevamente')
    });
}

const login = (email, password) => {
    state.loading = 'Iniciando Sesión';
    signInWithEmailAndPassword(getAuth(), email, password)
        .then(async () => {
            await refreshActiveSettlement();
            router.push({name: 'home'});
            state.loading = false;
        }).catch(() => {
        toast.error('Los datos ingresados no coinciden con nuestros registros')
    });
}

const logout = () => {
    signOut(getAuth()).then(() => {
        router.push({name: 'login'});
    }).catch(() => {
        toast.error('Ocurrió un error al cerrar sesión. Intentalo nuevamente')
    });
}

export default function useAuthentication() {
    return {
        register,
        login,
        logout
    }
}