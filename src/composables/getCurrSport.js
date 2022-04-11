import { ref } from "@vue/reactivity";

const currSport = ref("");
const isPending = ref(false);
const getCurrSport = async (x) => {
  isPending.value = true;
  try {
    const res = await fetch(`https://sports.api.decathlon.com/sports/${x}`);
    const data = await res.json();
    currSport.value = await data.data;
    isPending.value = false;
  } catch (e) {
    console.log(e);
    isPending.value = false;
  }
};

const useCurrSport = () => {
  return { getCurrSport, currSport, isPending };
};

export default useCurrSport;
