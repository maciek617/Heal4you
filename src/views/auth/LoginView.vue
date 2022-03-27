<template>
  <h1>Login Page</h1>
  <form>
    <input type="email" placeholder="E-mail" required v-model="email" />
    <input type="password" placeholder="Password" required v-model="password" />
    <button>Login</button>
  </form>
  <div class="account_info">
    <p class="_info">
      Do you have an account already?
      <router-link :to="{ name: 'signup' }">Signup!</router-link>
    </p>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity';
export default {
  setup() {
    const email = ref('');
    const password = ref('');

    return { email, password };
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
</style>
