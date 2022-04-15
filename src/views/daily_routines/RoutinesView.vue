<template>
  <div class="routines_wrapper">
    <h3>
      Want to be a programmer? doctor? maybe lawyer? Discover daily routines and
      become the greatest!
    </h3>
    <div class="routines_list">
      <div
          v-for="routine in routinesBase"
          :key="routine"
          class="routine_category"
      >
        <router-link :to="{name: 'routine', params: {slug: routine.toLowerCase().replaceAll(' ', '-')}}">
          <p>
            <span>{{ routine.toUpperCase() }}</span>
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "@vue/reactivity";

export default {
  name: "RoutinesView",
  setup() {
    const routinesBase = ref([
      "Males",
      "Females",
      "Kids",
      "Programmer",
      "Lawyer",
      "Doctor",
      "Firefighter",
      "Policeman",
      "Cook",
      "Financial analyst",
    ]);

    return {routinesBase};
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
  padding: 10px;
}

.routines_list {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

p {
  padding: 8px;
  cursor: pointer;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.routine_category {
  width: 300px;
  height: 100px;
  margin: 20px auto;
  border: 1px solid var(--blue);
  box-shadow: 1px 0px 1px rgba(0, 0, 0, .2);
}
</style>
