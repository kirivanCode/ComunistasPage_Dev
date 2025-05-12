// src/firebase/getComments.ts
import { db } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export const getComments = async (newsId: string) => {
  const commentsRef = collection(db, `news/${newsId}/comentarios`);
  const snapshot = await getDocs(commentsRef);
  return snapshot.docs.map(doc => ({
  id: doc.id,
  ...doc.data()
}));
};
