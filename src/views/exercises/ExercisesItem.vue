<template>
  <div class="exercises_detail_wrapper" v-if="!isPending">
    <div class="ex" v-for="ex in exDetailBase" :key="ex">
      <CurrentExercise :id="ex.id" />
    </div>
  </div>
  <LoadingAnimation v-if="isPending" />
  <BackButton />
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import CurrentExercise from "@/components/CurrentExercise";
import { ref } from "@vue/reactivity";
import BackButton from "@/components/BackButton";
import LoadingAnimation from "@/components/LoadingAnimation";

export default {
  name: "ExercisesItem",
  components: { CurrentExercise, BackButton, LoadingAnimation },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const isPending = ref(false);
    const exDetailBase = ref(null);

    const getCurrentGroup = async () => {
      isPending.value = true;
      try {
        const data = await fetch(
          `https://sports.api.decathlon.com/groups/${route.params.id}`
        );
        const res = await data.json();
        exDetailBase.value = res.data.relationships.sports.data;
        isPending.value = false;
      } catch (e) {
        console.log(e);
        isPending.value = false;
      }
    };

    getCurrentGroup();

    return { exDetailBase, router, isPending };
  },
};
</script>

<style scoped>
.exercises_detail_wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
