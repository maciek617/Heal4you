<template>
  <div class="container">
    <router-link :to="{ name: backToHome }">
      <div class="logo">
        <img :src="require('../assets/logo.png')" alt="" />
      </div>
    </router-link>
    <nav>
      <div v-if="!user">
        <router-link to="/login">Login</router-link>
        <router-link :to="{ name: 'signup' }" class="sign_btn"
          >Signup
        </router-link>
      </div>
      <div v-else>
        <button class="blog">Blog</button>
        <button @click="handleLogout">Logout</button>
      </div>
    </nav>
  </div>
</template>
<script>
import getUser from "@/composables/getUser";
import useLogout from "@/composables/useLogout";
import { useRouter } from "vue-router";
import { computed } from "vue";

export default {
  setup() {
    const { user } = getUser();
    const { error, logout } = useLogout();
    const router = useRouter();

    const handleLogout = async () => {
      await logout();

      if (!error.value) {
        user.value = null;
        await router.push({ name: "login" });
      }
    };

    const backToHome = computed(() => {
      return user.value !== null ? "heal4you" : "home";
    });

    return { user, handleLogout, backToHome };
  },
};
</script>
<style scoped>
.container {
  background-color: var(--creme);
  height: 64px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h1 {
  font-weight: 500;
  font-size: 1.8em;
  color: black;
}

nav a {
  margin: 5px;
  color: black;
}

nav a.router-link-active {
  color: var(--blue);
}

.blog {
  margin-right: 14px;
}

.sign_btn {
  background-color: var(--btn);
  padding: 4px 10px;
  border-radius: 8px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);
}

.logo {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.logo img {
  width: 50px;
}

@media screen and (min-width: 1024px) {
  .container {
    padding: 10px 80px;
  }

  nav a {
    margin: 5px 20px;
  }
}
</style>
