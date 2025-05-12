// src/firebase/getNews.ts
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function getNews() {
  const ref = collection(db, "news");
  const snapshot = await getDocs(ref);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    
  }));
}
