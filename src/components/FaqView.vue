<template>
  <div class="faq_wrapper">
    <h1>Frequently asked questions</h1>

    <div class="faq_field_wrapper">
      <div class="faq_field" v-for="(faq, i) in faqBase" :key="i">
        <div class="open_faq">
          <h3 @click="closeAllFaq(faq)">
            {{ faq.q }}
            <i class="fa-solid fa-plus" :class="faq.open ? 'rotate' : ''"></i>
          </h3>
          <p class="invisible" :class="faq.open ? 'visible' : ''">
            {{ faq.a }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  name: "FaqView",
  setup() {
    const faqBase = ref([
      {
        q: "Who we are?",
        a: "We are a passionate about programming and healthy life style. Use our resources to change your life.",
        open: false,
      },
      {
        q: "What we do?",
        a: "We provide a healthy resources for everyone. Starting with diet and ending at exercises that you can make in home.",
        open: false,
      },
      {
        q: "Is it free?",
        a: "Yes all it's free. Additionally you can create resources to help others.",
        open: false,
      },
      {
        q: "Is Heal4You a open source project?",
        a: "Yes, it is a open source project. You can check github repo anytime you want to.",
        open: false,
      },
      {
        q: "Can I donate",
        a: "We haven't provide donations yet. So stay tuned maybe in future we would enable it.",
        open: false,
      },
    ]);

    const closeAllFaq = (item) => {
      if (!item.open) {
        faqBase.value.forEach((e) => (e.open = false));
      }
      item.open = !item.open;
    };

    return { faqBase, closeAllFaq };
  },
};
</script>

<style scoped>
.faq_wrapper {
  text-align: center;
  max-width: 700px;
  margin: 40px auto;
}

.faq_field {
  border: 1px solid var(--btn);
  border-radius: 10px;
  margin: 10px 0;
}

.faq_field_wrapper {
  margin-top: 20px;
}

.invisible {
  visibility: hidden;
  opacity: 0;
  height: 0;
  transition: opacity 0.3s, height 0.3s, padding 0.3s, visibility 0.1s;
}

.visible {
  visibility: visible;
  height: 110px;
  opacity: 1;
  padding: 10px 20px;
}

h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  margin: 8px 0;
}

.open_faq {
  cursor: pointer;
}

.rotate {
  transform: rotate(45deg);
}

.fa-plus {
  transition: transform 0.3s;
}
</style>
