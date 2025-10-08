// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
//funcao getAuth do firebase authentication
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5y0ZjVQfipqqMVDpQ-6rwYnFk92kL0Qo",
  authDomain: "projeto-web-24623.firebaseapp.com",
  projectId: "projeto-web-24623",
  storageBucket: "projeto-web-24623.firebasestorage.app",
  messagingSenderId: "794761253065",
  appId: "1:794761253065:web:7cb7c1c3b494f5880cfd18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth, app}
//uma instancia do servico 
// //de autenticacao associado ao app firebase