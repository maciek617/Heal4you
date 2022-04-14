<template>
  <div class="modal_wrapper" v-if="isOpen">
    <div class="modal">
      <h2 class="modal_h2">Add new diet</h2>
      <div class="input_wrapper">
        <input type="text" placeholder="Title..." v-model="title" />
        <textarea
          placeholder="Description..."
          v-model="description"
          @keyup="charsCount"
        ></textarea>
      </div>
      <button class="save_btn" @click="addData">Save</button>
      <button class="save_btn" @click="$emit('closeModal')">
        <i class="fa-solid fa-circle-xmark"></i>
      </button>
      <div class="word_counter">
        <p>Chars: {{ newText.length }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import useSet from "@/composables/setCollectionData";
import getUser from "@/composables/getUser";
export default {
  props: ["isOpen"],
  setup(props, ctx) {
    const { user } = getUser();
    const { setData } = useSet();
    const title = ref("");
    const description = ref("");
    const newText = ref("");

    const addData = async () => {
      if (title.value.trim() !== "" && description.value.trim() !== "") {
        await setData(
          title.value,
          description.value,
          user.value.displayName,
          user.value.photoURL
        );
        title.value = "";
        description.value = "";
        document.body.classList.remove("modal_active");
        ctx.emit("closeModal");
      }
    };

    const charsCount = () => {
      newText.value = description.value.split(/\s/).join("");
    };
    return { title, description, addData, charsCount, newText };
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
}

.word_counter {
  position: absolute;
  bottom: 20px;
  left: 20px;
}

@media screen and (min-width: 1024px) {
  .modal {
    width: 500px;
  }
}
</style>
