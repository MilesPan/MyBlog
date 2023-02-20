<template>
  <div
    class="top-0 h-20 w-full flex justify-between bg-violet-600 bg-opacity-80 px-2"
  >
    <section class="left flex justify-between">
      <ul class="flex items-center text-gray-900">
        <li
          class="hover:text-orange-200 p-2 cursor-pointer text-white"
          v-for="(item, index) in navigations"
          @click="item.callBack"
        >
          {{ item.title }}
        </li>
      </ul>
      <!-- <el-button
        type="primary"
        size="default"
        class="md:!m-0"
        @click="$router.push({ name: 'article.create' })"
        >发表文章</el-button
      >
      <el-button
        type="primary"
        size="default"
        class="md:!m-0"
        @click="$router.push({ name: 'login' })"
        >管理员登录</el-button
      >
      <el-button
        type="primary"
        size="default"
        class="md:!m-0"
        @click="$router.push('/')"
        >回到首页</el-button
      > -->
    </section>
    <section class="mid">
      <div class="logo h-full flex justify-center">
        <img
          src="/images/avator.jpg"
          alt=""
          class="rounded-full overflow-hidden border-8 border-blue-400"
        />
      </div>
    </section>
    <section class="right flex justify-between">
      <ul class="flex items-center text-gray-900">
        <li
          class="hover:text-orange-200 p-2 cursor-pointer text-white"
          @click="$router.push({ name: 'login' })"
        >
          登录
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
interface INavItem {
  title: string;
  callBack: () => void;
}
const router = useRouter();
const navigations = ref<INavItem[]>([
  {
    title: "首页",
    callBack: () => router.push({ path: "/" }),
  },
  {
    title: "发表文章",
    callBack: () => router.push({ name: "article.create" }),
  },
  {
    title: "栏目管理",
    callBack: () => router.push({ name: "category.manage" }),
  },
]);
</script>

<style scoped lang="scss"></style>
