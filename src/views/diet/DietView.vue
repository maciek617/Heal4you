<template>
  <div class="create">
    <button @click="open = true">
      Create a new diet <i class="fa-solid fa-plus"></i>
    </button>
  </div>
  <Teleport to="body">
    <ModalView :open="open" @closeModal="open = false" />
  </Teleport>
</template>
<script>
import { ref } from 'vue';
import ModalView from '@/components/ModalView.vue';
export default {
  components: { ModalView },
  setup() {
    const open = ref(false);

    return { open };
  },
};
</script>
<style>
.create {
  margin-top: 10px;
  text-align: right;
}
</style>
