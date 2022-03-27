<template>
  <NavView />
  <div class="content">
    <router-view />
  </div>
</template>

<script>
import NavView from './components/NavView.vue';
export default {
  components: { NavView },
};
</script>

<style>
.content {
  min-height: 90vh;
  padding: 10px;
  background-color: var(--primary);
}
</style>
