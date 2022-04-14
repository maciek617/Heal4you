import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

const setData = async (title, desc, author, author_img) => {
  const docRef = await addDoc(collection(db, "diet"), {
    title: title,
    desc: desc,
    author: author,
    author_img: author_img,
    createdAt: Date.now(),
  });

  if (!docRef) {
    alert("No docRef");
  }
};

const useSet = () => {
  return { setData };
};

export default useSet;
