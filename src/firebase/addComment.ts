import { db } from './firebaseConfig';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

export const addComment = async (newsId: string, usuario: string, mensaje: string) => {
  await addDoc(collection(db, `news/${newsId}/comentarios`), {
    usuario,
    mensaje,
    fecha: serverTimestamp()
  });
};
