import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {auth} from "@/firebase/config";

const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
}

export default signInWithGoogle