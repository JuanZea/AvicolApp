import "../../firebase.config"
import firebase from "firebase/app";
import router from "../router";

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