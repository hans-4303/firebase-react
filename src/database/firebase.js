// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABwjsZEyoxYy2dkJrL_Otfbk2QyY7ko8w",
    authDomain: "fir-login-faeb9.firebaseapp.com",
    /* 위의 두 키만 사용 */

    projectId: "fir-login-faeb9",
    storageBucket: "fir-login-faeb9.appspot.com",
    messagingSenderId: "14781743654",
    appId: "1:14781743654:web:17a8e8e9d560ee74d4dce7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);