<template>
  <div class="sport_detail">
    <div class="details_animation" v-if="!isPending">
      <div class="details" v-if="currSport">
        <h1>{{ currSport.attributes.name }}</h1>
        <p v-if="currSport.attributes.description">
          {{ currSport.attributes.description }}
        </p>
        <p v-else>No description data :(</p>
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
          <p>No image found</p>
        </div>
      </div>
    </div>
    <div v-if="isPending">
      <h1 class="load">Loading...</h1>
    </div>
    <BackButton />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import BackButton from "@/components/BackButton";
import useCurrSport from "@/composables/getCurrSport";

export default {
  name: "CurrentSportDetail",
  components: { BackButton },
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
.image {
  margin: 50px auto;
  max-width: 600px;
}
.image img {
  width: 100%;
}
p {
  margin: 10px;
}
.load {
  text-align: center;
}
</style>
