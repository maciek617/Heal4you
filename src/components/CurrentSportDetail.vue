<template>
  <div class="sport_detail">
    <div class="details_animation" v-if="!isPending">
      <div class="details" v-if="currSport">
        <h1>{{ currSport.attributes.name }}</h1>
        <p v-if="currSport.attributes.description">
          {{ currSport.attributes.description }}
        </p>
        <p v-else class="error">
          Sorry, API doesn't provide description for this sport :(
        </p>
        <div
          class="image"
          v-if="currSport.relationships.images.data.length > 0"
        >
          <img
            :src="currSport.relationships.images.data[0].url"
            alt=""
            loading="lazy"
          />
        </div>
        <div v-else>
          <p class="error">
            Sorry, API doesn't provide image for this sport :(
          </p>
        </div>
      </div>
    </div>
    <LoadingAnimation v-if="isPending" />
    <BackButton v-if="!isPending" />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import BackButton from "@/components/BackButton";
import useCurrSport from "@/composables/getCurrSport";
import LoadingAnimation from "@/components/LoadingAnimation";

export default {
  name: "CurrentSportDetail",
  components: { BackButton, LoadingAnimation },
  setup() {
    const route = useRoute();
    const { currSport, getCurrSport, isPending } = useCurrSport();

    const handleGetCurrSpot = async () => {
      await getCurrSport(route.params.id);
    };

    handleGetCurrSpot();

    return { currSport, isPending };
  },
};
</script>

<style scoped>
.sport_detail {
  margin-top: 30px;
}

.image {
  margin: 50px auto;
  max-width: 400px;
}

.image img {
  width: 100%;
}

p {
  margin: 10px;
}

.error {
  margin: 20px;
}
</style>
