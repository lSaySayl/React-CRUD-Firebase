import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBOpfd3nmNhgOPtioKmenNDrA3DZZpPbpw",
    authDomain: "crud-10a21.firebaseapp.com",
    projectId: "crud-10a21",
    storageBucket: "crud-10a21.appspot.com",
    messagingSenderId: "74020753541",
    appId: "1:74020753541:web:b482efef9da50ec130d9ec"
  };
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)