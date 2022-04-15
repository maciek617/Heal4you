import {db} from "@/firebase/config";
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import {ref} from "@vue/reactivity";
import {watchEffect} from "vue";

const isPending = ref(false);

const getCollection = (col) => {
    isPending.value = true;
    const q = query(collection(db, col), orderBy("createdAt", "desc"));
    const documents = ref(null);

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const results = [];
        querySnapshot.forEach((doc) => {
            results.push({...doc.data(), id: doc.id});
            documents.value = results;
            isPending.value = false;
        });

        watchEffect((Inv) => {
            Inv(() => unsubscribe());
            isPending.value = false;
        });
    });
    return {documents, isPending};
};

export default getCollection;
