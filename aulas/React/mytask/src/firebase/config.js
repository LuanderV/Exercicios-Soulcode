import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDo2TC5DG7EV702IHAnY1az1PL-uAA2NO8",
  authDomain: "my-task-ba44a.firebaseapp.com",
  projectId: "my-task-ba44a",
  storageBucket: "my-task-ba44a.appspot.com",
  messagingSenderId: "480327170217",
  appId: "1:480327170217:web:41655701037cb358cdd1b8"
};

// app => objeto com todas as configurações do firebase
export const app = initializeApp(firebaseConfig);
// auth => objeto com as configurações de authentication
export const auth = getAuth(app);
// db => objeto com as configurações do firestore
export const db = getFirestore(app);
