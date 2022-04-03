<template>
  <div class="dietItem_wrapper" v-if="data != null">
    <h1>{{ data.title }}</h1>
    <p>{{ data.desc }}</p>
    <button @click="goBack">Back</button>
    <p>Author: {{ user.displayName }}</p>
    <p>Created at: {{ correctDisplayDate }}</p>
  </div>
</template>

<script>
import useGetDocument from "@/composables/getData";
import { useRoute, useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import getUser from "@/composables/getUser";
import { computed } from "vue";
export default {
  name: "DietItem",
  setup() {
    const { user } = getUser();
    const { getDocument } = useGetDocument();
    const route = useRoute();
    const router = useRouter();
    const data = ref(null);

    const handleShowItem = async () => {
      const res = await getDocument("diet", route.params.id);
      data.value = res;
    };

    const correctDisplayDate = computed(() => {
      return new Date(data.value.createdAt).toLocaleString();
    });

    handleShowItem();

    const goBack = () => router.go(-1);

    return { data, user, goBack, correctDisplayDate };
  },
};
</script>

<style scoped>
h1 {
  padding: 14px 8px;
}
p {
  padding: 8px;
  text-align: justify;
}
button {
  margin: 10px;
}
</style>
