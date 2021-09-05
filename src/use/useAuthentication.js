import "../../firebase.config"
import firebase from "firebase/app";
import router from "../router";
import {settlementsService} from "../services";
import {ref} from "vue";

const register = (name, email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            userCredentials.user.updateProfile({
              displayName: name
            }).then(() => {
                router.push({name: 'home'});
            }).catch(console.log);
        }).catch(console.log);
}

const login = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const settlements = ref([]);
            settlementsService.all().then(response => {
                settlements.value = response.data.data;
            }).catch(console.log)
            if(settlements.value.length) {
                router.push({name: 'home'});
            } else {
                router.push({name: 'createSettlements'});
            }
        }).catch(console.log);
}

const logout = () => {
    firebase.auth().signOut().then(() => {
        router.push({name: `login`});
    }).catch(console.log);
}

export default function useAuthentication() {
    return {
        register,
        login,
        logout
    }
}