<template>
  <header>
    <NavView />
  </header>
  <main>
    <div class="content">
      <router-view v-slot="{ Component, route }">
        <transition name="route" mode="out-in">
          <div :key="route.name">
            <component :is="Component"></component>
          </div>
        </transition>
      </router-view>
    </div>
  </main>
  <footer>
    <FooterView />
  </footer>
</template>

<script>
import NavView from "./components/NavView.vue";
import FooterView from "@/components/FooterView";

export default {
  components: { NavView, FooterView },
};
</script>

<style>
.content {
  min-height: 92vh;
  padding: 10px;
  background-color: var(--primary);
}
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
