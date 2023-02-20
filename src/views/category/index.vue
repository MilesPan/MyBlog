<template>
  <ArticleList :cid="route.params.cid" :key="route.params.cid"></ArticleList>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped></style>
