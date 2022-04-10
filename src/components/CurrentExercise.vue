<template>
  <router-link :to="{ name: 'sport', params: { id: id } }">
    <div class="sport">
      <h4>{{ currSport }}</h4>
    </div>
  </router-link>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  name: "CurrentExercise",
  props: ["id"],
  setup(props) {
    const currSport = ref(null);

    const getCurrSport = async () => {
      try {
        const res = await fetch(
          `https://sports.api.decathlon.com/sports/${props.id}`
        );
        const data = await res.json();
        currSport.value = data.data.attributes.name;
      } catch (e) {
        console.log(e);
      }
    };

    getCurrSport();

    return { currSport };
  },
};
</script>

<style scoped>
.sport {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100px;
  margin: 10px;
  border: 1px solid var(--btn);
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.sport:hover {
  background-color: var(--blue);
}

h4 {
  padding: 0 8px;
  text-align: center;
}
</style>
