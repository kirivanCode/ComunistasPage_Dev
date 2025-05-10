// src/firebase/firebaseConfig.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyAJ-4tK8yo614mwhT-p1uq3Q_1-vuIdf3k",
  authDomain: "xdddd-ec219.firebaseapp.com",
  projectId: "xdddd-ec219",
  storageBucket: "xdddd-ec219.firebasestorage.app",
  messagingSenderId: "196282701354",
  appId: "1:196282701354:web:b654cf43535b08eaadd553",
  measurementId: "G-TDYGT3T185"
};

// Verifica si ya existe una app antes de inicializar
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
