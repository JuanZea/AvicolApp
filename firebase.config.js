import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDHoAphIK1S53MFSOYzHE1JBdibfVE3L8Q",
    authDomain: "avicol-app.firebaseapp.com",
    projectId: "avicol-app",
    storageBucket: "avicol-app.appspot.com",
    messagingSenderId: "296466475403",
    appId: "1:296466475403:web:ba4c368f00fad1b5f9278e"
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