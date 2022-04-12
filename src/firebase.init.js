// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDH3n3NXfKTZLbzyOGCLE-0RIhbSd8bPfY",
    authDomain: "my-emajhon-shop.firebaseapp.com",
    projectId: "my-emajhon-shop",
    storageBucket: "my-emajhon-shop.appspot.com",
    messagingSenderId: "1044246078287",
    appId: "1:1044246078287:web:19092d00ca8e0b63cf1b3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;