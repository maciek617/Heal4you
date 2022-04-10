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
        title: "Integrated",
        desc: "Our application is integrated with Firebase, so you can save a lot of information.",
      },
      {
        title: "100+ diets",
        desc: "You can find more than 100 diets prepared by doctors and the others.",
      },
      {
        title: "100+ active users",
        desc: "You can join to over 100 users around the world and start changing your life.",
      },
      {
        title: "+10 health services",
        desc: "There you can find a lot of services like: exercises, diets, daily routines etc.",
      },
      {
        title: "Patient safety",
        desc: "We guarantee the security, so don't worry about that.",
      },
      {
        title: "Fun",
        desc: "Make you life easier and healthier by entertainment.",
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
