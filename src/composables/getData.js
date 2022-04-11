import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { ref } from "@vue/reactivity";

const isPending = ref(false);

const getDocument = async (col, document) => {
  isPending.value = true;
  const docRef = doc(db, col, document);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    isPending.value = false;
    return docSnap.data();
  } else {
    isPending.value = false;
  }
};

const useGetDocument = () => {
  return { getDocument, isPending };
};

export default useGetDocument;
