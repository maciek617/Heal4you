<template>
  <button @click="router.go(-1)">Back</button>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  name: "BackButton",
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
};
</script>
