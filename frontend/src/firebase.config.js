// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd1SHvFIvYVfwDhtaVFSTNgx8jcFr9rqQ",
  authDomain: "reactreuseanalyzer.firebaseapp.com",
  projectId: "reactreuseanalyzer",
  storageBucket: "reactreuseanalyzer.appspot.com",
  messagingSenderId: "541246733100",
  appId: "1:541246733100:web:71a269fb3e0d7b492bca89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app