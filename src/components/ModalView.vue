<template>
  <div class="modal_wrapper" v-if="isOpen">
    <div class="modal">
      <h2 class="modal_h2">Add new diet</h2>
      <div class="input_wrapper">
        <input type="text" placeholder="Title..." v-model="title" />
        <textarea placeholder="Description..." v-model="description"></textarea>
      </div>
      <button class="save_btn" @click="addData">Save</button>
      <button class="save_btn" @click="$emit('closeModal')">
        <i class="fa-solid fa-circle-xmark"></i>
      </button>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import useSet from "@/composables/setCollectionData";
export default {
  props: ["isOpen"],
  setup(props, ctx) {
    const { setData } = useSet();
    const title = ref("");
    const description = ref("");

    const addData = async () => {
      if (title.value.trim() !== "" && description.value.trim() !== "") {
        await setData(title.value, description.value);
        title.value = "";
        description.value = "";
        ctx.emit("closeModal");
      }
    };

    return { title, description, addData };
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
.modal_wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
