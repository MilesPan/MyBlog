<template>
  <div class="top-0 h-20 w-full flex justify-between px-2 relative nav">
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
    </section>
    <section class="mid absolute left-1/2 -translate-x-1/2 h-full">
      <div class="logo h-full flex justify-center">
        <img src="/images/avator.png" alt="" class="overflow-hidden" />
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

<style scoped lang="scss">
.nav {
  background: linear-gradient(to right, #4063bc, #cd4dc5e4, #8713dae4);
  background-size: 200%;
  transition: background-position 0.5s;
}
.nav:hover {
  background-position: 100%;
}
</style>
