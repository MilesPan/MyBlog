<template>
  <el-card shadow="always" :body-style="{ padding: '20px' }" class="mt-2 pb-2">
    <el-select
      class="mb-2"
      v-model="article.categoryId"
      value-key=""
      placeholder="请选择栏目"
      clearable
      filterable
      @change=""
    >
      <el-option
        v-for="category in categories"
        :key="category.id"
        :label="category.title"
        :value="category.id"
      >
      </el-option>
    </el-select>

    <template #header> 发表文章 </template>
    <el-input
      v-model="article.title"
      placeholder="请输入标题"
      clearable
      class="mb-2"
    />
    <Editor v-model="article.content" :height="500"></Editor>
    <el-button
      type="primary"
      size="default"
      @click="onSubmit"
      class="mt-2 float-right"
      >保存提交</el-button
    >
  </el-card>
</template>

<script setup lang="ts">
import { Article } from "@/apis/article";
import Editor from "@/components/wangEditor/editor.vue";
import useArticle from "@/composables/useArticle";
import useCategory from "@/composables/useCategory";
const { add } = useArticle();
const { all, categories } = useCategory();
await all();
const article = ref<Article>({
  title: "",
  content: "",
  categoryId: undefined,
});
const router = useRouter();
const onSubmit = async () => {
  try {
    await add(article.value);
    router.push("/");
  } catch (err) {}
};
</script>

<style scoped></style>
