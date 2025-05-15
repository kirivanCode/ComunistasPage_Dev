import { db } from './firebaseConfig';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';

export const getComments = async (newsId: string) => {
  const commentsRef = collection(db, `news/${newsId}/comentarios`);
  // Agrega la ordenación por fecha ascendente
  const q = query(commentsRef, orderBy('fecha', 'asc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};
