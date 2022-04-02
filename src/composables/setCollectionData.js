import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

const setData = async (title, desc) => {
  const docRef = await addDoc(collection(db, "diet"), {
    title: title,
    desc: desc,
  });

  if (!docRef) {
    alert("No docRef");
  }
};

const useSet = () => {
  return { setData };
};

export default useSet;
