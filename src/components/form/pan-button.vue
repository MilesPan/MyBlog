<template>
  <button class="pan-button">{{ props.content }}</button>
</template>

<script setup lang="ts">
interface Prop {
  content?: string;
}
const props = withDefaults(defineProps<Prop>(), {
  content: "登录",
});
</script>

<style lang="scss" scoped>
.pan-button {
  @apply bg-violet-700 text-white w-full py-2 rounded-md mt-4 hover:bg-violet-500 duration-300;
}
</style>
