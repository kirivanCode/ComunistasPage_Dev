// src/firebase/getLikes.ts
import { db } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export const getLikes = async (newsId: string) => {
  const likesRef = collection(db, `news/${newsId}/likes`);
  const snapshot = await getDocs(likesRef);
  return snapshot.docs.map(doc => ({
  id: doc.id,
  ...doc.data()
}));
};
