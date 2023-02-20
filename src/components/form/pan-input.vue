<template>
  <input
    type="text"
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
    class="pan-input"
    placeholder="请输入账号"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: String,
});
</script>
<style lang="scss" scoped>
.pan-input {
  @apply border bg-slate-400 border-white placeholder-white w-full placeholder:text-xs outline-none rounded-sm py-1 px-2 focus:ring-2 ring-violet-700 ring-offset-2 ring-offset-transparent duration-300 focus:border-slate-400;
}
</style>
