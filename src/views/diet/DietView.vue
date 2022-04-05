<template>
  <div class="diet_wrapper">
    <div class="create">
      <button @click="checkIfOpen">
        Create a new diet <i class="fa-solid fa-plus"></i>
      </button>
    </div>
    <div class="dietList" v-if="documents != null">
      <div class="diet" v-for="document in documents" :key="document.id">
        <h1 class="diet_title">{{ document.title }}</h1>
        <p class="diet_description">
          {{ document.desc.substring(0, 60) + "..." }}
        </p>
        <router-link :to="{ name: 'dietItem', params: { id: document.id } }">
          <button class="diet_btn">See details</button>
        </router-link>
      </div>
    </div>
    <div v-else class="no_diet">
      <h1>
        Sorry, we haven't prepared diets yet. If you know any good diets that
        may help others. Click on "Create a new diet" and make it!
      </h1>
    </div>
    <Teleport to="body">
      <ModalView :isOpen="open" @closeModal="resetStyles" />
    </Teleport>
  </div>
</template>
<script>
import { ref } from "vue";
import ModalView from "@/components/ModalView.vue";
import getCollection from "@/composables/setData";

export default {
  components: { ModalView },
  setup() {
    const { documents } = getCollection("diet");
    const open = ref(false);

    const checkIfOpen = () => {
      open.value = true;
      if (open.value) {
        document.body.classList.add("modal_active");
      } else {
        document.body.classList.remove("modal_active");
      }
    };

    const resetStyles = () => {
      open.value = false;
      document.body.classList.remove("modal_active");
    };

    return { open, documents, checkIfOpen, resetStyles };
  },
};
</script>
<style>
.create {
  margin-top: 10px;
  text-align: right;
}
.dietList {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.diet {
  margin: 14px 8px;
  min-height: 180px;
  width: 320px;
  padding: 8px;
  border-radius: 14px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);
  background-color: var(--creme);
}

.diet_title {
  font-size: 1.7em;
  font-weight: 600;
  margin-left: 12px;
}

.diet_description {
  margin-top: 8px;
  padding: 8px;
}

.diet_btn {
  display: block;
  margin: 30px auto 0;
  cursor: pointer;
}
.no_diet {
  margin-top: 100px;
  text-align: center;
}

.modal_active {
  margin: 0;
  height: 100%;
  overflow: hidden;
}
</style>
