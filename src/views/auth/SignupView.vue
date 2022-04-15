<template>
  <div class="log_wrapper">
    <GoogleAuth/>
    <p>or</p>
    <h1>Signup Page</h1>
    <form @submit.prevent="handleSubmit">
      <input
          v-model="displayName"
          autocomplete="name"
          placeholder="Display name"
          required
          type="text"
      />
      <input
          v-model="email"
          autocomplete="email"
          placeholder="E-mail"
          required
          type="email"
      />
      <input
          v-model="password"
          autocomplete="new-password"
          placeholder="Password"
          required
          type="password"
      />
      <div v-if="error" class="error">
        <p>{{ error }}</p>
      </div>
      <button v-if="!isPending">Sign Up</button>
      <button v-if="isPending" disabled>Loading...</button>
    </form>
    <div class="account_info">
      <p class="_info">
        Already have an account?
        <router-link :to="{ name: 'login' }" class="login_btn"
        >Login!
        </router-link>
      </p>
    </div>
  </div>
</template>
<script>
import {ref} from "@vue/reactivity";
import {useRouter} from "vue-router";
import useSignup from "../../composables/useSignup";
import GoogleAuth from "@/components/GoogleAuth";

export default {
  components: {GoogleAuth},
  setup() {
    const {signup, error, isPending} = useSignup();
    const displayName = ref("");
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
      !error.value ? await router.push({name: "heal4you"}) : null;
    };

    return {displayName, email, password, handleSubmit, error, isPending};
  },
};
</script>

