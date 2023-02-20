<template>
  <div id="editor"></div>
</template>

<script setup lang="ts">

import { nextTick } from "vue";
import ToastEditor from "./toastEditor";
interface PropsType {
  modelValue?: string;
  height?: number;
  placeholder?: string;
}
const props = withDefaults(defineProps<PropsType>(), {
  modelValue: "",
  height: 500,
  placeholder: "",
});
const emit = defineEmits(["update:modelValue"]);
nextTick(() => {
  const toast = new ToastEditor(
    "#editor",
    props.modelValue,
    `${props.height}px`
  );
  toast.editor.on("change", (type: any) => {
    emit(
      "update:modelValue",
      toast.editor[type === "markdown" ? "getMarkdown" : "getHTML"]()
    );
  });
});
</script>
<style lang="scss">
#editor {
  @apply bg-white;
  :deep(.toastui-editor-mode-switch) {
    display: none !important;
  }
  .fullscreen {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 999;
    background: #fff;
  }
}
</style>
