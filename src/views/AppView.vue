<template>
  <div class="app_container">
    <div class="info_box first">
      <h1>Healthy diet</h1>
      <div class="first_layout">
        <div class="layout_info">
          <p>
            Creating balance in your diet can make all the difference between
            feeling like you're hopelessly counting calories and endlessly
            scrolling for meal ideas.
          </p>
          <router-link :to="{ name: 'diet' }">
            <button>Checkout</button>
          </router-link>
        </div>
        <img
            :src="require('../assets/health_8.svg')"
            alt="healthy diet image"
            loading="lazy"
        />
      </div>
    </div>
    <div class="info_box second">
      <h1>Daily routines</h1>
      <div class="second_layout">
        <img
            :src="require('../assets/health_5.svg')"
            alt="tooth brush image"
            loading="lazy"
        />
        <div class="layout_info">
          <p>
            Some days are better than others, but one thing we all have in
            common is a daily routine. Here are some of the top routines in our
            community, what do you think is most important?
          </p>
          <router-link :to="{ name: 'routines' }">
            <button>Checkout</button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="info_box first">
      <h1>Discover Sports!</h1>
      <div class="first_layout">
        <div class="layout_info">
          <p>
            From pushups to squats, we’ve got the perfect exercises for your
            living room. And if you’re up for being sentenced to community
            service and walking laps around a track, there’s always Pilates!
          </p>
          <router-link :to="{ name: 'exercises' }">
            <button>Checkout</button>
          </router-link>
        </div>
        <img
            :src="require('../assets/health_1.svg')"
            alt="running man image"
            loading="lazy"
        />
      </div>
    </div>
    <div class="info_box second">
      <h1>Calculate your BMI</h1>
      <div class="second_layout">
        <img
            :src="require('../assets/health_9.svg')"
            alt="doctor visit image"
            loading="lazy"
        />
        <div class="layout_info">
          <p>
            When it comes to the body mass index, there’s no need to be defined by a number.
            What matters most is that you’re thriving and healthy. #BMI
          </p>
          <router-link :to="{ name: 'bmi' }">
            <button>Checkout</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.app_container {
  max-width: 1600px;
  margin: 0 auto;
  text-align: center;
}

.first_layout {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column-reverse;
}

.second_layout {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
}

.info_box img {
  margin: 0 auto;
  min-width: 300px;
  max-width: 50vw;
}

.second,
.first {
  position: relative;
}

.info_box p {
  text-align: center;
}

.layout_info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.layout_info button {
  margin-top: 15px;
}

.info_box {
  margin-top: 40px;
}

@media screen and (min-width: 600px) {
  .layout_info {
    max-width: 50%;
  }

  .first_layout,
  .second_layout {
    flex-direction: row;
    align-items: center;
  }

  .second h1 {
    position: absolute;
    top: 10%;
    left: 50%;
  }

  .first h1 {
    position: absolute;
    top: 10%;
    left: 0;
  }

  .layout_info {
    align-items: flex-start;
  }

  .info_box p {
    text-align: left;
  }
}

@media screen and (min-width: 1024px) {
  .info_box p {
    font-size: 1.2em;
  }

  .second h1,
  .first h1 {
    top: 100px;
    font-size: 2.8em;
  }

  .layout_info button {
    margin-top: 25px;
    width: 160px;
    height: 48px;
  }
}
</style>
