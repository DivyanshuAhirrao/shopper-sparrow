import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBj_caIGPcFZ_8ikJLK3ytrhczFXjGVZQs",
  authDomain: "sparrow-shopper.firebaseapp.com",
  projectId: "sparrow-shopper",
  storageBucket: "sparrow-shopper.appspot.com",
  messagingSenderId: "120542939776",
  appId: "1:120542939776:web:2f09c0cc87a3cd118db465",
  measurementId: "G-1HM2QHGEW4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };