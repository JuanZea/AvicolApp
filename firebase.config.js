import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5hWBLcaa_KGoO9kZ3KsijDzjTpK-WsZg",
  authDomain: "avicol-app-api.firebaseapp.com",
  projectId: "avicol-app-api",
  storageBucket: "avicol-app-api.appspot.com",
  messagingSenderId: "491687652989",
  appId: "1:491687652989:web:a53e41698a219d2fd1cb14",
  measurementId: "G-2S0HVX4MND"
};

firebase.initializeApp(firebaseConfig);

firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged(user => {
            init(user).then(() => {
                resolve(user);
            });
        }, reject);
    })
}

const init = async (user) => {
    if (user) {
        // Initialize
    } else {
        // Unsubscribe
    }
}