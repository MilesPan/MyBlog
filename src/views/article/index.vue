<template>
  <main>
    <article-list></article-list>
  </main>
</template>

<script lang="ts" setup>
import useArticle from "@/composables/useArticle";

const { all, pageResult } = useArticle();
await all();
</script>
<style scoped lang="scss">
main {
}
</style>
