<template>
  <div class="log_wrapper">
    <h1>Login Page</h1>
    <form @submit.prevent="handleSubmit">
      <input type="email" placeholder="E-mail" required v-model="email" />
      <input
        type="password"
        placeholder="Password"
        required
        v-model="password"
      />
      <div class="error" v-if="error">
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
import { ref } from "@vue/reactivity";
import useLogin from "../../composables/useLogin";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { error, isPending, login } = useLogin();
    const router = useRouter();
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await login(email.value, password.value);
      !error.value ? await router.push({ name: "heal4you" }) : null;
    };

    return { email, password, isPending, handleSubmit, error };
  },
};
</script>
<style>
form {
  margin-top: 20px;
}

._info {
  margin-top: 20px;
  text-align: center;
}

.login_btn {
  color: var(--blue);
}
</style>
