<template>
  <div class="app_container">
    <div class="info_box first">
      <h1>Healthy diet</h1>
      <div class="first_layout">
        <div class="layout_info">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            vero impedit in eaque tempora, necessitatibus expedita molestias.
            Cum, necessitatibus deserunt?
          </p>
          <button>Checkout</button>
        </div>
        <img :src="require('../assets/health_8.svg')" alt="" />
      </div>
    </div>
    <div class="info_box second">
      <h1>Daily routines</h1>
      <div class="second_layout">
        <img :src="require('../assets/health_5.svg')" alt="" />
        <div class="layout_info">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            vero impedit in eaque tempora, necessitatibus expedita molestias.
            Cum, necessitatibus deserunt?
          </p>
          <button>Checkout</button>
        </div>
      </div>
    </div>
    <div class="info_box first">
      <h1>Home exercies</h1>
      <div class="first_layout">
        <div class="layout_info">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            vero impedit in eaque tempora, necessitatibus expedita molestias.
            Cum, necessitatibus deserunt?
          </p>
          <button>Checkout</button>
        </div>
        <img :src="require('../assets/health_1.svg')" alt="" />
      </div>
    </div>
    <div class="info_box second">
      <h1>Doctors visit</h1>
      <div class="second_layout">
        <img :src="require('../assets/health_9.svg')" alt="" />
        <div class="layout_info">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            vero impedit in eaque tempora, necessitatibus expedita molestias.
            Cum, necessitatibus deserunt?
          </p>
          <button>Checkout</button>
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
  min-width: 300px;
  max-width: 50vw;
}

.second,
.first {
  position: relative;
}

.info_box p {
  text-align: left;
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
