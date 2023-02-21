<template>
  <div>
    <Loading></Loading>
    <Suspense>
      <router-view></router-view>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import Loading from "./components/loading/index.vue";
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
