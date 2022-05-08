// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOIrjMbDNdebbrfWQQBx_8obu_hUqDBT0",
    authDomain: "genius-car-services-a5431.firebaseapp.com",
    projectId: "genius-car-services-a5431",
    storageBucket: "genius-car-services-a5431.appspot.com",
    messagingSenderId: "305670934408",
    appId: "1:305670934408:web:942ee3d9f0c16cf465743d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export default auth;

