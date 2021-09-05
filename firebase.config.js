import store from "./src/store";
import {initializeApp} from "firebase/app"
import {getAuth, onAuthStateChanged} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA5hWBLcaa_KGoO9kZ3KsijDzjTpK-WsZg",
  authDomain: "avicol-app-api.firebaseapp.com",
  projectId: "avicol-app-api",
  storageBucket: "avicol-app-api.appspot.com",
  messagingSenderId: "491687652989",
  appId: "1:491687652989:web:a53e41698a219d2fd1cb14",
  measurementId: "G-2S0HVX4MND"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, user => {
            store.dispatch('init', user);
            resolve(firebase);
        }, reject);
    })
}

store.commit('set', {key: 'firebase', value: getCurrentUser()});