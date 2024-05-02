import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyArgR_EwmuMy2RUw9eMGQgWns2kGLuoHKw",
    authDomain: "truquetes-app.firebaseapp.com",
    databaseURL: "https://truquetes-app-default-rtdb.firebaseio.com",
    projectId: "truquetes-app",
    storageBucket: "truquetes-app.appspot.com",
    messagingSenderId: "1013597407904",
    appId: "1:1013597407904:web:83c885699a2c8d5421d7c5",
    measurementId: "G-4K30GB4Q6K"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

let auth = firebase.auth();
let db = firebase.database();

export { auth, db };
export default firebase;