// src/firebase/addNews.ts
import { db } from './firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export async function addNews(title: string, content: string) {
  try {
    const docRef = await addDoc(collection(db, "news"), {
      title,
      content,
      createdAt: Timestamp.now()
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}
