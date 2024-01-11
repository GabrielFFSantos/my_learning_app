import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyD_q18JDpVdhU-7FcpDRjo7c8wNFwyUnes",
  authDomain: "task-30192.firebaseapp.com",
  projectId: "task-30192",
  storageBucket: "task-30192.appspot.com",
  messagingSenderId: "895866216022",
  appId: "1:895866216022:web:b7d607ce906860659925f7",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

// export default async function getTasks(db) {
//   const citiesCol = collection(db, "Tasks");
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map((doc) => doc.data());

//   return cityList;
// }

export default database;
