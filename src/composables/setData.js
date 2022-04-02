import { db } from "@/firebase/config";

import { collection, onSnapshot, query } from "firebase/firestore";
import { ref } from "@vue/reactivity";
import { watchEffect } from "vue";

const getCollection = (col) => {
  const q = query(collection(db, col));
  const documents = ref(null);

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const results = [];
    querySnapshot.forEach((doc) => {
      results.push({ ...doc.data(), id: doc.id });
      documents.value = results;
    });

    watchEffect((Inv) => {
      Inv(() => unsubscribe());
    });
  });
  return { documents };
};

export default getCollection;
