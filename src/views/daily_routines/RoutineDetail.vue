<template>
  <h2>Routine view for {{ route.params.slug }}</h2>
  <div v-if="!isPending" class="routine_wrapper">
    <p v-for="(routine, i) in data" :key="routine" class="routine">
      {{ i + 1 }}. {{ routine }}
    </p>
    <img :src="img" alt="job photo" loading="lazy">
  </div>
  <div v-if="isPending">
    <LoadingAnimation/>
  </div>
  <BackButton class="back"/>
</template>

<script>
import useGetDocument from '@/composables/getData'
import {useRoute} from "vue-router";
import {ref} from "@vue/reactivity";
import LoadingAnimation from "@/components/LoadingAnimation";
import BackButton from "@/components/BackButton";

export default {
  name: "RoutineDetail",
  components: {LoadingAnimation, BackButton},
  setup() {
    const {getDocument, isPending} = useGetDocument()
    const route = useRoute();
    const data = ref(null);
    const img = ref(null);

    const showRoutines = async () => {
      const res = await getDocument('routines', route.params.slug);
      data.value = res.routines_path;
      img.value = res.image
    }

    showRoutines()

    return {isPending, data, route, img}
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
  padding: 10px;
}

.routine {
  margin: 6px;
}

.back {
  margin-top: 30px;
}

.routine_wrapper img {
  display: block;
  margin: 20px auto;
  width: 100%;
  max-width: 600px;
  max-height: 300px;
  object-fit: contain;
}
</style>