<template>
  <div class="log_wrapper">
    <GoogleAuth/>
    <p>or</p>
    <h1>Login Page</h1>
    <form @submit.prevent="handleSubmit">
      <input
          v-model="email"
          autocomplete="email"
          placeholder="E-mail"
          required
          type="email"
      />
      <input
          v-model="password"
          autocomplete="current-password"
          placeholder="Password"
          required
          type="password"
      />
      <div v-if="error" class="error">
        <p>{{ error }}</p>
      </div>
      <button v-if="!isPending">Login</button>
      <button v-if="isPending" disabled>Loading...</button>
    </form>
    <div class="account_info">
      <p class="_info">
        You dont have an account yet?
        <router-link :to="{ name: 'signup' }" class="login_btn"
        >Signup!
        </router-link>
      </p>
    </div>
  </div>
</template>
<script>
import {ref} from "@vue/reactivity";
import useLogin from "../../composables/useLogin";
import {useRouter} from "vue-router";
import GoogleAuth from "@/components/GoogleAuth";

export default {
  components: {GoogleAuth},
  setup() {
    const {error, isPending, login} = useLogin();
    const router = useRouter();
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await login(email.value, password.value);
      !error.value ? await router.push({name: "heal4you"}) : null;
    };

    return {email, password, isPending, handleSubmit, error};
  },
};
</script>
