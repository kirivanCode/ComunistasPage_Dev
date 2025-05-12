// src/firebase/toggleLike.ts
import { db, doc, getDoc, setDoc, deleteDoc, serverTimestamp } from './firebaseConfig';

export const toggleLike = async (newsId: string, userId: string) => {
  const likeRef = doc(db, `news/${newsId}/likes/${userId}`);

  const likeDoc = await getDoc(likeRef);

  if (likeDoc.exists()) {
    await deleteDoc(likeRef); // quitar like
    return false;
  } else {
    await setDoc(likeRef, { fecha: serverTimestamp() });
    return true;
  }
};
