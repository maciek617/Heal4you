<template>
  <header>
    <NavView />
  </header>
  <main>
    <div class="content">
      <router-view />
    </div>
  </main>
  <footer><FooterView /></footer>
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
  min-height: 90vh;
  padding: 10px;
  background-color: var(--primary);
}
</style>
