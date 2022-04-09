<template>
  <div class="social_wrapper">
    <h1>Find us on social media</h1>
    <div class="icon_box">
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-github"></i>
      <i class="fa-brands fa-youtube"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialView",
};
</script>

<style scoped>
.social_wrapper {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1 {
  font-size: 5em;
}

.icon_box i {
  font-size: 3em;
  margin: 10px;
  cursor: pointer;
}
</style>
