import { ref } from "vue";
import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";

const error = ref(null);

const logout = async () => {
  error.value = null;

  try {
    await signOut(auth);
  } catch (e) {
    error.value = e.message;
  }
};

const useLogout = () => {
  return { logout, error };
};

export default useLogout;
