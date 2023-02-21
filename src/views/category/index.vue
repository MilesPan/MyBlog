<template>
  <ArticleList
    :cid="route.params.cid"
    :key="route.params.cid as string"
  ></ArticleList>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped></style>
