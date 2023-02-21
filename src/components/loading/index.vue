<template>
  <transition name="fade">
    <template v-if="show">
      <div class="contianer">
        <div
          class="loading-screen z-[1] w-full h-screen fixed flex justify-center items-center"
        >
          <div class="loading w-[80px] flex flex-wrap">
            <span></span><span></span><span></span><span></span>
          </div>
        </div>
      </div>
    </template>
  </transition>
</template>

<script setup lang="ts">
import Tracker from 'pdy-sdk-tracker'
import loading from "@/store/loading";
const show = computed(() => loading().show);
</script>

<style scoped>
.loading {
  animation: rotate 4s linear infinite;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

.loading-screen {
  backdrop-filter: blur(3px);
}
.loading span {
  width: 32px;
  height: 32px;
  background-color: red;
  margin: 4px;
  animation: scale 1.5s linear infinite;
}

@keyframes scale {
  50% {
    transform: scale(1.2);
  }
}

.loading span:nth-child(1) {
  border-radius: 50% 50% 0 50%;
  background-color: #e77f67;
  transform-origin: bottom right;
}
.loading span:nth-child(2) {
  border-radius: 50% 50% 50% 0;
  background-color: #778beb;
  transform-origin: bottom left;
  animation-delay: 0.5s;
}
.loading span:nth-child(3) {
  border-radius: 50% 0 50% 50%;
  background-color: #f8a5c2;
  transform-origin: top right;
  animation-delay: 1s;
}
.loading span:nth-child(4) {
  border-radius: 0 50% 50% 50%;
  background-color: #f5cd79;
  transform-origin: top left;
  animation-delay: 1.5s;
}
</style>
