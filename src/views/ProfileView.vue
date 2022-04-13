<template>
  <h1 class="greet">Hello, {{ user.displayName }}</h1>
  <div class="quote_wrap" v-if="quote !== null">
    <h2>"{{ quote.quote }}"</h2>
    <p>~{{ quote.author }}</p>
  </div>
  <div class="profile_picture">
    <img
      :src="
        user.photoURL == null
          ? 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          : user.photoURL
      "
      alt="profile picture"
    />
    <div class="buttons">
      <button>Change it!</button>
      <button>Remove it!</button>
    </div>
  </div>
  <form @submit.prevent="checkForProfileChanges">
    <label>Name</label>
    <input type="text" placeholder="Name..." v-model="displayName" />
    <label>E-mail</label>
    <input type="email" placeholder="Email..." v-model="email" disabled />
    <button>Save</button>
  </form>
  <div class="logs">
    <h3>Logs:</h3>
    <p>You are with us since: {{ user.metadata.creationTime }}</p>
    <p>Last sign in: {{ user.metadata.lastSignInTime }}</p>
  </div>
</template>

<script>
import getUser from "@/composables/getUser";
import { ref } from "@vue/reactivity";
import { onMounted } from "vue";
import { auth } from "@/firebase/config";
import { updateProfile } from "firebase/auth";

export default {
  name: "ProfileView",
  setup() {
    const { user } = getUser();
    const quote = ref(null);
    const displayName = ref("");
    const email = ref("");

    const getRandomQuote = async () => {
      const res = await fetch("https://api.goprogram.ai/inspiration");
      quote.value = await res.json();
    };

    onMounted(() => getRandomQuote());

    email.value = user.value.email;

    const checkForProfileChanges = async () => {
      if (
        displayName.value != null &&
        displayName.value !== user.value.displayName
      ) {
        await updateProfile(auth.currentUser, {
          displayName: displayName.value,
        });
        document.location.reload();
      }
    };

    displayName.value = user.value.displayName;
    return { user, quote, displayName, email, checkForProfileChanges };
  },
};
</script>

<style scoped>
.greet {
  font-size: clamp(2.2rem, 3vw, 5rem);
  padding: 10px;
}
.quote_wrap {
  max-width: 900px;
  padding: 10px;
}

.quote_wrap h2 {
  font-weight: 300;
}

.quote_wrap p {
  text-align: right;
}
.profile_picture {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
}
.buttons button {
  display: block;
  margin: 12px 8px;
}
.profile_picture img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.logs {
  margin-top: 20px;
}
</style>
