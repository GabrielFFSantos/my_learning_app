import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "Example",
  authDomain: "Example",
  projectId: "Example",
  storageBucket: "Example",
  messagingSenderId: "Example",
  appId: "Example",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database;
