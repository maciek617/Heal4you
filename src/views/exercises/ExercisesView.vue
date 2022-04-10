<template>
  <div class="exercises_wrapper">
    <h1>Explore sports</h1>
    <div class="list_exercises" v-if="exercisesBase !== null">
      <div class="exercise" v-for="exercise in exercisesBase" :key="exercise">
        <router-link
          :to="{ name: 'exercises_detail', params: { id: exercise.id } }"
        >
          <p>{{ exercise.attributes.name }}</p>
        </router-link>
      </div>
    </div>
    <BackButton />
  </div>
</template>

<script>
import useListGroup from "@/composables/getListGroupExercises";
import BackButton from "@/components/BackButton";
export default {
  name: "ExercisesView",
  components: { BackButton },
  setup() {
    const { err, exercisesBase, getListGroupExercises } = useListGroup();

    const getItems = async () => {
      await getListGroupExercises();
    };

    getItems();

    return { err, exercisesBase, getListGroupExercises };
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
