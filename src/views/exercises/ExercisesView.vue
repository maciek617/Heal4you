<template>
  <div v-if="!isPending" class="exercises_wrapper">
    <h1>Explore sports</h1>
    <div v-if="exercisesBase !== null" class="list_exercises">
      <div v-for="exercise in exercisesBase" :key="exercise" class="exercise">
        <router-link
            :to="{ name: 'exercises_detail', params: { id: exercise.id } }"
        >
          <p>{{ exercise.attributes.name }}</p>
        </router-link>
      </div>
    </div>
    <BackButton v-if="!isPending"/>
  </div>
  <LoadingAnimation v-if="isPending"/>
</template>

<script>
import useListGroup from "@/composables/getListGroupExercises";
import BackButton from "@/components/BackButton";
import LoadingAnimation from "@/components/LoadingAnimation";

export default {
  name: "ExercisesView",
  components: {BackButton, LoadingAnimation},
  setup() {
    const {exercisesBase, getListGroupExercises, isPending} =
        useListGroup();
    const getItems = async () => {
      await getListGroupExercises();
    };

    getItems();

    return {exercisesBase, getListGroupExercises, isPending};
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}

.list_exercises {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.exercise {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 70px;
  margin: 20px;
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);
  background-color: var(--btn);
  transition: background-color 0.3s;
}

.exercise:hover {
  background-color: var(--blue);
}

p {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 70px;
}
</style>
