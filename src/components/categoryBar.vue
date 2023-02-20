<template>
  <div class="categoryBar">
    <div class="flex flex-col md:flex-row md:justify-between">
      <nav>
        <section
          v-for="category of categories"
          :key="category.id"
          @click="
            $router.push({
              name: 'category.index',
              params: { cid: category.id },
            })
          "
          class="w-full md:w-auto"
          :class="{ active: +$route.params.cid === category.id }"
        >
          {{ category.title }}
        </section>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import useCategory from "@/composables/useCategory";
const { all, categories } = useCategory();
await all();
</script>

<style scoped lang="scss">
nav {
  @apply flex md:flex-row  flex-col gap-2 items-center flex-wrap;
  section {
    @apply bg-violet-600 hover:bg-emerald-600  duration-500 text-white py-2 px-3 cursor-pointer rounded-md hover:shadow-lg   hover:rounded-2xl;
    &.active {
      @apply bg-green-600 font-bold;
    }
  }
}
</style>
