<template>
  <div class="animate-list reactive">
    <TransitionGroup
      appear
      :tag="props.tag"
      name="animate"
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <slot></slot>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { RendererElement } from "vue";
interface Props {
  tag?: string;
  duration?: number;
  delay?: number;
}
const props = withDefaults(defineProps<Props>(), {
  tag: undefined,
  duration: 0.5,
  delay: 0.2,
});
const beforeEnter = (el: RendererElement) => {
  gsap.set(el, {
    opacity: 0,
  });
};
const enter = (el: RendererElement) => {
  gsap.to(el, {
    opacity: 1,
    duration: props.duration,
    delay: el.dataset.index * props.delay,
  });
};
</script>

<style scoped lang="scss">
.animate-leave-active {
  transition: all 1s ease;
  position: absolute;
}
.animate-leave-to {
  opacity: 0;
  width: calc(100% - 1rem);
}
.animate-move {
  transition: all 1s ease;
}
</style>
