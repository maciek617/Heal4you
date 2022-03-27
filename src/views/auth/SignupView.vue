<template>
  <h1>Signup Page</h1>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      placeholder="Display name"
      required
      v-model="displayName"
    />
    <input type="email" placeholder="E-mail" required v-model="email" />
    <input type="password" placeholder="Password" required v-model="password" />
    <button v-if="!isPending">Sign Up</button>
    <button v-if="isPending" disabled>Loading...</button>
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
import { useRouter } from 'vue-router';
import useSignup from '../../composables/useSignup';
export default {
  setup() {
    const { signup, error, isPending } = useSignup();
    const displayName = ref('');
    const email = ref('');
    const password = ref('');
    const router = useRouter();
    console.log(router);

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
      router.push({ name: 'home' });
    };

    return { displayName, email, password, handleSubmit, error, isPending };
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
