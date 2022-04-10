// https://sports.api.decathlon.com/groups

import { ref } from "@vue/reactivity";

const exercisesBase = ref(null);
const err = ref(null);

const getListGroupExercises = async () => {
  try {
    const data = await fetch("https://sports.api.decathlon.com/groups");
    const res = await data.json();
    exercisesBase.value = res.data;
  } catch (e) {
    err.value = e.message;
  }
};

const useListGroup = () => {
  return { getListGroupExercises, err, exercisesBase };
};

export default useListGroup;
