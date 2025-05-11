// src/firebase/addNews.ts
import { db } from './firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

// Añadimos un parámetro "author" (nombre del usuario)
export async function addNews(title: string, content: string, image: string, author: string) {
  try {
    const docRef = await addDoc(collection(db, "news"), {
      title,
      content,
      image,
      autor: author, // nombre completo del usuario
      createdAt: Timestamp.now()
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
}
