<template>
  <h1 @click="handleGoogleAuth">Continue with Google</h1>
</template>

<script>
import {useRouter} from "vue-router";
import signInWithGoogle from "@/composables/useGoogleAuth";

export default {
  name: "GoogleAuth",
  setup() {
    const router = useRouter();

    const handleGoogleAuth = async () => {
      await signInWithGoogle()
      await router.push({name: 'heal4you'})
    }

    return {handleGoogleAuth}
  }
}
</script>

<style scoped>
h1 {
  background-color: var(--btn);
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;
}
</style>