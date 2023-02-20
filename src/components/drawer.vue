<template>
  <div class="drawer">
    <el-drawer
      v-model="myShow"
      :direction="direction"
      @close="handleClose"
      size="40%"
    >
      <template #header>
        <h4>
          <slot name="title"></slot>
        </h4>
      </template>
      <template #default>
        <slot name="content"></slot>
      </template>
      <template #footer>
        <slot name="footer"></slot>
      </template>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { Direction } from "element-plus";
type MyDirection = Direction | "btt";
const props = withDefaults(
  defineProps<{
    isShow: boolean;
    direction?: MyDirection;
  }>(),
  {
    direction: "btt",
  }
);
const myShow = ref<boolean>(props.isShow);
watch(
  () => props.isShow,
  () => {
    myShow.value = props.isShow;
  }
);
const emit = defineEmits(["handleClose"]);
const handleClose = () => {
  emit("handleClose", false);
};
</script>

<style scoped></style>
