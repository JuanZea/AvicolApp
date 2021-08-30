import "../../firebase.config"
import firebase from "firebase/app";
import router from "../router";
import {usersService} from "../services";

const register = (name, email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            usersService.create({firebaseId: userCredentials.user.uid})
                .then(() => {
                    router.push({name: 'home'});
                }).catch(console.log)
        }).catch(console.log);
}

const login = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            router.push({name: 'home'});
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