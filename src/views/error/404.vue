<template>
  <div class="">
    <!-- component -->
    <!-- MDI Icons -->
    <link
      rel="stylesheet"
      href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"
    />

    <!-- Page Container -->
    <div class="flex items-center justify-center min-h-screen bg-white py-48">
      <div class="flex flex-col">
        <!-- Error Container -->
        <div class="flex flex-col items-center">
          <div class="text-indigo-500 font-bold text-7xl">404</div>
          <div
            class="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10"
          >
            This page does not exist
          </div>
          <div
            class="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8"
          >
            The page you are looking for could not be found.
          </div>
          <router-link
            to="/"
            class="mt-2 font-bold bg-teal-400 text-white py-2 px-4 rounded-full hover:bg-yellow-600 hover:text-slate-600 duration-300"
            >首页</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
