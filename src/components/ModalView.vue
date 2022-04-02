<template>
  <div class="modal" v-if="open">
    <h2 class="modal_h2">Add new diet</h2>
    <div class="input_wrapper" @change="validateInputs">
      <input type="text" placeholder="Title..." v-model="title" />
      <textarea placeholder="Description..." v-model="description"></textarea>
    </div>
    <button class="save_btn" @click="$emit(show ? 'closeModal' : '')">
      Save
    </button>
    <button class="save_btn" @click="$emit('closeModal')">
      <i class="fa-solid fa-circle-xmark"></i>
    </button>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity';
export default {
  props: ['open'],
  setup() {
    const title = ref('');
    const description = ref('');
    const show = ref(false);

    const validateInputs = () => {
      if (title.value.trim() !== '' && description.value.trim() !== '') {
        show.value = true;
      } else {
        show.value = false;
      }
    };

    return { title, description, validateInputs, show };
  },
};
</script>
<style>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 14px;
  border-radius: 12px;
  background-color: whitesmoke;
  text-align: right;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);
}

.modal_h2 {
  text-align: left;
}
.save_btn {
  margin-right: 12px;
}
</style>
