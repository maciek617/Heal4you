<template>
  <div class="container">
    <router-link to="/heal4you"><h1>Heal4You</h1></router-link>
    <nav>
      <div v-if="!user">
        <router-link to="/login">Login</router-link>
        <router-link :to="{ name: 'signup' }">Signup</router-link>
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

export default {
  setup() {
    const { user } = getUser();
    const { error, isPending, logout } = useLogout();
    const router = useRouter();

    const handleLogout = async () => {
      await logout();

      if (!error.value) {
        user.value = null;
        router.push({ name: "login" });
      }
    };

    return { user, handleLogout, isPending };
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
}

nav a {
  margin: 5px;
  color: black;
}

nav a.router-link-active {
  color: red;
}

.blog {
  margin-right: 14px;
}
</style>
