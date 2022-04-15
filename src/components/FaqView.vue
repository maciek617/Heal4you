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
    <div class="start">
      <h2>What are you waiting for?</h2>
      <router-link :to="{ name: 'signup' }">
        <button>START</button>
      </router-link>
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
        q: "Who I am?",
        a: "I am 17 years old. Frontend passionate about programming especially web development. In this project I want to introduce you to healthy lifestyle.",
        open: false,
      },
      {
        q: "What I do?",
        a: "I do a lot of projects with Vue <3. Stay tuned in my github to future projects.",
        open: false,
      },
      {
        q: "Is it free?",
        a: "Yes all it's free. Additionally you can create resources to help others.",
        open: false,
      },
      {
        q: "Can I see source code?",
        a: "Yes, you can check github repo anytime you want to.",
        open: false,
      },
      {
        q: "Can I donate?",
        a: "Nah, the best donate for me is to give me some feedback about code or functionality.",
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

.start {
  margin: 20px;
}

.start button {
  margin-top: 8px;
  width: 120px;
  height: 40px;
}
</style>
