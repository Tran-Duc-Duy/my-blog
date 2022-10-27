import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYc_2etujZdfFtB-TAyQoLXdUbQm4FPF0",
  authDomain: "react-blogs-app-2302f.firebaseapp.com",
  projectId: "react-blogs-app-2302f",
  storageBucket: "react-blogs-app-2302f.appspot.com",
  messagingSenderId: "898115210801",
  appId: "1:898115210801:web:4e0e2080557cd1ee224f10"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
