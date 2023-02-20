<template>
  <div class="notification">
    <i
      class="fa-regular fa-envelope cursor-pointer"
      @click.stop="show = !show"
    ></i>
    <Transition
      class="animate__animated"
      enter-active-class="animate__fadeIn"
      leave-active-class="animate__fadeOut"
    >
      <el-tabs v-model="activeName" class="lists" v-show="show" @click.stop>
        <el-tab-pane label="站内通知" name="site">
          <a href=""
            >的卡拉瓦的就拉开的卡拉瓦的就拉开的卡拉瓦的就拉开的卡拉瓦的就拉开的卡拉瓦的就拉开的卡拉瓦的就拉的卡拉瓦的就拉开的卡拉瓦的就拉开的卡拉瓦的就拉开的卡拉瓦的就拉开的卡拉瓦的就拉开的卡拉瓦的就拉开开
          </a>
          <a href=""
            >的卡拉瓦的就拉的卡拉瓦的就拉开的卡拉瓦的就拉开的卡拉瓦的就拉开的卡拉瓦的就拉开的卡拉瓦的就拉开的卡拉瓦的就拉开开的卡拉瓦的就拉开的卡拉瓦的就拉开的卡拉瓦的就拉开的卡拉瓦的就拉开的卡拉瓦的就拉开
          </a>
          <a href=""
            >的卡拉瓦的就拉开的卡拉瓦的就拉开的卡拉瓦的就拉开的卡拉瓦的就拉开的的卡拉瓦的就拉开的卡拉瓦的就拉开的卡拉瓦的就拉开的卡拉瓦的就拉开的卡拉瓦的就拉开的卡拉瓦的就拉开卡拉瓦的就拉开的卡拉瓦的就拉开
          </a>
        </el-tab-pane>

        <el-tab-pane label="消息通知" name="message">Task</el-tab-pane>
      </el-tabs>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import {} from "process";
import { nextTick, ref } from "vue";
const activeName = ref("site");
const show = ref(false);
nextTick(() => {
  document.documentElement.addEventListener("click", () => {
    show.value = false;
  });
});
</script>

<style scoped lang="scss">
.notification {
  @apply relative;
  .lists {
    @apply absolute bg-white px-4  py-2 rounded-xl shadow-md right-[-60px] z-10  w-[300px];
    a {
      @apply truncate text-sm overflow-hidden block border-b pb-3 my-2 hover:text-emerald-700;
    }
  }
}
</style>
