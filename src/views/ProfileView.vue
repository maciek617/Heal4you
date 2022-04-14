<template>
  <div class="profile_wrapper" v-if="user">
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
        @error="removeImage"
        alt="profile picture"
      />
      <div class="buttons">
        <button @click="show = true">Change it!</button>
        <button @click="removeImage">Remove it!</button>
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
    <Teleport to="body">
      <div class="change_photo_wrapper" v-if="show">
        <div class="change_photo">
          <p>
            Photo must by hosted online! If link is invalid it would change to
            default profile image!
          </p>
          <form @submit.prevent="checkForProfileChanges">
            <input type="text" placeholder="photo url" v-model="photo_url" />
            <button>Save</button>
            <button @click="show = false">Cancel</button>
          </form>
        </div>
      </div>
    </Teleport>
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
    const show = ref(false);
    const quote = ref(null);
    const displayName = ref("");
    const photo_url = ref("");
    const email = ref("");

    const getRandomQuote = async () => {
      const res = await fetch("https://api.goprogram.ai/inspiration");
      quote.value = await res.json();
    };

    onMounted(() => {
      getRandomQuote();
      email.value = user.value.email;
      displayName.value = user.value.displayName;
    });

    const checkForProfileChanges = async () => {
      if (
        (displayName.value != null &&
          displayName.value !== user.value.displayName) ||
        (photo_url.value !== "" && photo_url.value != null)
      ) {
        await updateProfile(auth.currentUser, {
          displayName: displayName.value,
          photoURL:
            photo_url.value === "" ? user.value.photoURL : photo_url.value,
        });
        document.location.reload();
      }
    };

    const removeImage = async () => {
      await updateProfile(auth.currentUser, {
        photoURL:
          "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      });
      document.location.reload();
    };

    return {
      user,
      quote,
      displayName,
      email,
      checkForProfileChanges,
      show,
      photo_url,
      removeImage,
    };
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

.change_photo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid var(--btn);
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.4);
}

.change_photo p {
  padding: 10px;
}

.change_photo input {
  color: white;
}

.change_photo button {
  margin: 8px;
}

.change_photo_wrapper {
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  color: whitesmoke;
  text-align: center;
}
</style>
