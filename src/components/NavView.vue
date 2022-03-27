<template>
  <div class="container">
    <h1>Heal4You</h1>
    <nav>
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">Signup</router-link>
      <button>Logout</button>
    </nav>
  </div>
</template>
<script>
export default {};
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
</style>
