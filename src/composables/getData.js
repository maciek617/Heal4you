import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

const getDocument = async (col, document) => {
  const docRef = doc(db, col, document);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No document");
  }
};

const useGetDocument = () => {
  return { getDocument };
};

export default useGetDocument;
