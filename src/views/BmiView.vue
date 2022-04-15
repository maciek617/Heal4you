<template>
  <div class="bmi_wrapper">
    <h2>Calculate your BMI</h2>
    <form @submit.prevent="calculateBMT">
      <input v-model="height" placeholder="Height (cm)" type="number"/>
      <input v-model="weight" placeholder="Weight (kg)" type="number"/>
      <div v-if="!error && bmi" class="bmi_info">
        <p>Your BMI: {{ bmi.toFixed(2) }}</p>
        <p>
          You are: <span>{{ output }}</span>
        </p>
      </div>
      <p v-if="error" class="error">{{ error }}</p>
      <button>Calculate</button>
    </form>
  </div>
</template>

<script>
import {ref} from "@vue/reactivity";

export default {
  name: "BmiView",
  setup() {
    const height = ref("");
    const weight = ref("");
    const bmi = ref(0);
    const error = ref("");
    const output = ref("");

    const calculateBMT = () => {
      const x = parseFloat(height.value) / 100;
      const y = parseFloat(weight.value);

      bmi.value = y / Math.pow(x, 2);

      if (x > 0 && y > 0) {
        error.value = "";
        output.value =
            bmi.value < 18.5
                ? "Underweight"
                : 18.5 < bmi.value < 24.9
                    ? "Normal weight"
                    : 25 < bmi.value < 29.9
                        ? "Overweight"
                        : "Obesity";
      } else {
        error.value = "All fields must be filled and number must be positive.";
      }
    };

    return {height, weight, calculateBMT, error, output, bmi};
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  padding: 20px;
}

.bmi_wrapper {
  margin-top: 70px;
}

.bmi_info {
  margin: 14px 0;
}

span {
  font-weight: bold;
}
</style>

