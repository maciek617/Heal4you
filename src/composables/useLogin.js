import { ref } from 'vue';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const error = ref(null);
const isPending = ref(false);

const login = async (email, password) => {
  error.value = null;
  isPending.value = true;

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log(res);

    if (!res) {
      throw new Error('Could not finish. Try again!');
    }

    error.value = null;
    isPending.value = false;
  } catch (e) {
    //TODO: properly show to user
    error.value = e.message;
    isPending.value = false;
  }
};

const useLogin = () => {
  return { error, isPending, login };
};

export default useLogin;
