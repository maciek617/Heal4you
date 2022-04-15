<template>
  <div v-if="data != null" class="dietItem_wrapper">
    <h1>{{ data.title }}</h1>
    <p>{{ data.desc }}</p>
    <div class="author_data">
      <p>Author: {{ data.author }}</p>
      <img :src="data.author_img" alt="user photo"/>
    </div>
    <p>Created at: {{ correctDisplayDate }}</p>
  </div>
  <LoadingAnimation v-if="isPending"/>
  <BackButton/>
</template>

<script>
import useGetDocument from "@/composables/getData";
import {useRoute} from "vue-router";
import {ref} from "@vue/reactivity";
import getUser from "@/composables/getUser";
import {computed} from "vue";
import LoadingAnimation from "@/components/LoadingAnimation";
import BackButton from "@/components/BackButton";

export default {
  name: "DietItem",
  components: {LoadingAnimation, BackButton},
  setup() {
    const {user} = getUser();
    const {getDocument, isPending} = useGetDocument();
    const route = useRoute();
    const data = ref(null);

    const handleShowItem = async () => {
      const res = await getDocument("diet", route.params.id);
      data.value = await res;
    };

    handleShowItem();

    const correctDisplayDate = computed(() => {
      return new Date(data.value.createdAt).toLocaleString();
    });

    return {data, user, correctDisplayDate, isPending};
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
