<template>
  <div class="dietItem_wrapper" v-if="data != null">
    <h1>{{ data.title }}</h1>
    <p>{{ data.desc }}</p>
    <button @click="goBack">Back</button>
    <div class="author_data">
      <p>Author: {{ data.author }}</p>
      <img :src="data.author_img" alt="user photo" />
    </div>
    <p>Created at: {{ correctDisplayDate }}</p>
  </div>
  <LoadingAnimation v-if="isPending" />
</template>

<script>
import useGetDocument from "@/composables/getData";
import { useRoute, useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import getUser from "@/composables/getUser";
import { computed } from "vue";
import LoadingAnimation from "@/components/LoadingAnimation";
export default {
  name: "DietItem",
  components: { LoadingAnimation },
  setup() {
    const { user } = getUser();
    const { getDocument, isPending } = useGetDocument();
    const route = useRoute();
    const router = useRouter();
    const data = ref(null);

    const handleShowItem = async () => {
      const res = await getDocument("diet", route.params.id);
      data.value = await res;
    };

    handleShowItem();

    const correctDisplayDate = computed(() => {
      return new Date(data.value.createdAt).toLocaleString();
    });

    const goBack = () => router.go(-1);

    return { data, user, goBack, correctDisplayDate, isPending };
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

.author_data {
  display: flex;
}
.author_data img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
</style>
