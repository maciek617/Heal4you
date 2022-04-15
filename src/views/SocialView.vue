<template>
  <div class="social_wrapper">
    <h1>Find me on social media</h1>
    <div class="icon_box">
      <a href="https://www.instagram.com/mck1337/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
      <a href="https://github.com/maciek617" target="_blank"><i class="fa-brands fa-github"></i></a>
      <a href="https://www.youtube.com/channel/UC1FuwnXUpg77Mb7butgJJXQ" target="_blank"><i
          class="fa-brands fa-youtube"></i></a>
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
