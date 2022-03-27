<template>
  <h1>Signup Page</h1>
  <form>
    <input
      type="text"
      placeholder="Display name"
      required
      v-model="displayName"
    />
    <input type="email" placeholder="E-mail" required v-model="email" />
    <input type="password" placeholder="Password" required v-model="password" />
    <button>Sign Up</button>
  </form>
  <div class="account_info">
    <p class="_info">
      Do you have an account already?
      <router-link :to="{ name: 'login' }">Login!</router-link>
    </p>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity';
export default {
  setup() {
    const displayName = ref('');
    const email = ref('');
    const password = ref('');

    return { displayName, email, password };
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
