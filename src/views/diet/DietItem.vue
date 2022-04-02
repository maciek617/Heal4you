<template>
  <div class="dietItem_wrapper" v-if="data != null">
    <h1>{{ data.title }}</h1>
    <p>{{ data.desc }}</p>
  </div>
</template>

<script>
import useGetDocument from "@/composables/getData";
import { useRoute } from "vue-router";
import { ref } from "@vue/reactivity";
export default {
  name: "DietItem",
  setup() {
    const { getDocument } = useGetDocument();
    const route = useRoute();
    const data = ref(null);

    const handleShowItem = async () => {
      const res = await getDocument("diet", route.params.id);
      data.value = res;
    };
    handleShowItem();
    return { data };
  },
};
</script>

<style scoped></style>
