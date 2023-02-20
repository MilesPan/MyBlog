<template>
  <div>
    <Suspense>
      <router-view></router-view>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
// const response = await fetch("http://127.0.0.1:5173/api/info").then((res) =>
// const response = await info();
// console.log(response.data);
// const response = await login();
// console.log(response.data);
</script>

<style scoped></style>
