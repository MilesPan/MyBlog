<template>
  <animate-list tag="div" :duration="2" :delay="0.1">
    <section
      v-for="(article, index) in pageResult?.data"
      :key="article.id"
      :data-index="index"
      class="gap-2 md:gap-0"
    >
      <router-link
        :to="{ name: 'article.show', params: { id: article.id } }"
        class="rounded-xl md:rounded-none"
        >{{ article.title }}</router-link
      >
      <aside
        class="hidden md:block"
        @click="
          $router.push({
            name: 'category.index',
            params: { cid: article.categoryId },
          })
        "
      >
        {{ article.category.title }}
      </aside>
    </section>
    <div class="mt-5 border-t border-gray-100 pt-3">
      <el-pagination
        class="justify-end"
        @current-change="all"
        :page-size="pageResult?.meta.page_row"
        layout="prev, pager, next"
        :total="pageResult?.meta.total"
        background
      />
    </div>
  </animate-list>
</template>

<script setup lang="ts">
import useArticle from "@/composables/useArticle";
const { cid } = defineProps<{
  cid?: any;
}>();
const { all, pageResult } = useArticle();
await all(1, cid);
</script>

<style scoped lang="scss">
section {
  @apply mt-5 flex justify-between items-center;
  a {
    @apply bg-slate-700 text-gray-200 py-2 px-3 block mb-2;
  }
  aside {
    @apply text-xs p-2 bg-teal-700 text-white hover:rounded-2xl  hover:bg-white hover:text-slate-800 hover:font-bold duration-500 cursor-pointer;
  }
}
</style>
