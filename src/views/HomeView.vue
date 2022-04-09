<template>
  <div class="home">
    <div class="hero_text">
      <div class="hero_text_description">
        <h1>Take care about you and the others.</h1>
        <p>
          Your health really is your wealth, and it’s why we’re there for you.
        </p>
        <router-link :to="{ name: 'social' }">
          <button class="discover">Discover</button>
        </router-link>
      </div>
      <div class="hero_img">
        <img :src="require('../assets/health_10.svg')" alt="woman meditating" />
      </div>
    </div>
  </div>
  <div class="bounce_btn">
    <span @click="scrollToMain">
      <i class="fa-solid fa-chevron-down"></i>
    </span>
  </div>
  <HomeCards ref="main_content" />
  <FaqView />
</template>

<script>
import FaqView from "@/components/FaqView";
import HomeCards from "@/components/HomeCards";
import { ref } from "@vue/reactivity";

export default {
  name: "HomeView",
  components: { FaqView, HomeCards },
  setup() {
    const main_content = ref(null);
    const scrollToMain = () => {
      main_content.value.$el.scrollIntoView({ behavior: "smooth" });
    };

    return { scrollToMain, main_content };
  },
};
</script>

<style>
.home {
  min-height: 80vh;
}

.hero_text {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  text-align: center;
  font-size: clamp(1rem, 2.2vw, 1.5rem);
}

.hero_text_description {
  max-width: 400px;
  position: relative;
}

.hero_text_description p {
  max-width: 500px;
  font-size: clamp(1rem, 1.2vw, 1.2rem);
}

.hero_img {
  width: 100%;
  max-width: 550px;
}

.bounce_btn {
  position: relative;
}

.bounce_btn span {
  z-index: 999;
  display: block;
  background-color: white;
  width: 40px;
  height: 40px;
  margin: -20px auto 0;
  border-radius: 50%;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}

.bounce_btn span i {
  animation: bounce 2s infinite;
}

.discover {
  margin-top: 20px;
}

@media screen and (min-width: 970px) {
  .hero_text_description {
    text-align: left;
  }

  .discover {
    position: absolute;
    left: 0;
    top: 100%;
  }
}

@media screen and (min-width: 1600px) {
  .hero_img {
    max-width: 750px;
  }

  .hero_text_description {
    max-width: 800px;
  }
}
</style>
