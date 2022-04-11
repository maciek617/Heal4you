import { ref } from "@vue/reactivity";

const exercisesBase = ref(null);
const err = ref(null);
const isPending = ref(false);
const getListGroupExercises = async () => {
  isPending.value = true;
  try {
    const data = await fetch("https://sports.api.decathlon.com/groups");
    const res = await data.json();
    exercisesBase.value = res.data;
    isPending.value = false;
  } catch (e) {
    err.value = e.message;
    isPending.value = true;
  }
};

const useListGroup = () => {
  return { getListGroupExercises, err, exercisesBase, isPending };
};

export default useListGroup;
