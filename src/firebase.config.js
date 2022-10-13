import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB7DannGZe0ubNDjzz4kz5Op4z74aMZfgw",
  authDomain: "foodapp-81c6e.firebaseapp.com",
  databaseURL: "https://foodapp-81c6e-default-rtdb.firebaseio.com",
  projectId: "foodapp-81c6e",
  storageBucket: "foodapp-81c6e.appspot.com",
  messagingSenderId: "794803197718",
  appId: "1:794803197718:web:3d2f7303f71e9c35d5e237",
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const storage = getStorage(app);

export { app, firestore, storage };
