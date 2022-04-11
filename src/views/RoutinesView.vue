<template>
  <div class="routines_wrapper">
    <h4>
      Want to be a programmer? doctor? maybe lawyer? Discover daily routines and
      become the greatest!
    </h4>
    <div class="routines_list">
      <div
        class="routine_category"
        v-for="(routine, i) in routinesBase"
        :key="i"
      >
        <p>
          {{ i + 1 }}. <span>{{ routine }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

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

    return { routinesBase };
  },
};
</script>

<style scoped>
h4 {
  text-align: center;
  padding: 10px;
}

.routines_list {
  margin-top: 40px;
}

p {
  margin: 8px;
  cursor: pointer;
}
</style>
