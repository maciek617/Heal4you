<template>
  <div class="cards_wrapper">
    <div class="card" v-for="card in cardsBase" :key="card.title">
      <h2><i class="fa-solid fa-notes-medical"></i>{{ card.title }}</h2>
      <p>{{ card.desc }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  name: "HomeCards",
  setup() {
    const cardsBase = ref([
      {
        title: "Health",
        desc: "Heal4You was created to help people find health path and discover themselves.",
      },
      {
        title: "Diets",
        desc: "On Heal4You you can find a lot of diets prepared by others.",
      },
      {
        title: "Active users",
        desc: "Join to Heal4You army and change your life.",
      },
      {
        title: "Sports",
        desc: "There you can discover sports around the world.",
      },
      {
        title: "Safety",
        desc: "I guarantee the security, so don't worry about that.",
      },
      {
        title: "Fun",
        desc: "Moving around the app can brings a lot of fun, don't trust me? Check it!.",
      },
    ]);

    return { cardsBase };
  },
};
</script>

<style scoped>
.cards_wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 40px auto;
}

.card {
  margin: 10px;
  width: 300px;
  height: 200px;
  padding: 8px;
  border-radius: 8px;
  box-shadow: -1px -1px 230px var(--btn);
}

h2 i {
  margin-right: 8px;
}
p {
  text-align: center;
  margin-top: 30px;
}
</style>
