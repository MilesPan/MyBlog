<template>
  <el-card shadow="always" :body-style="{ padding: '20px' }" class="mt-2 pb-2">
    <template #header>编辑文章 </template>
    <el-select
      class="mb-2"
      v-model="article!.categoryId"
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

    <el-input
      v-model="article!.title"
      placeholder="请输入标题"
      clearable
      class="mb-2"
    />
    <Editor v-model="article!.content" :height="500"></Editor>
    <el-button
      size="default"
      @click="onSubmit"
      class="mt-2 float-right !bg-green-500 !text-white"
      >保存编辑</el-button
    >
    <el-button
      type="primary"
      size="default"
      @click="
        $router.push({
          name: 'article.show',
          params: { id: article?.id },
        })
      "
      class="mt-2 mr-4 float-right"
      >取消编辑</el-button
    >
  </el-card>
</template>

<script setup lang="ts">
import Editor from "@/components/wangEditor/editor.vue";
import useArticle from "@/composables/useArticle";
import useCategory from "@/composables/useCategory";
const route = useRoute();
const { add, article, find, update } = useArticle();
await find(+route.params?.id);
const { all, categories } = useCategory();
await all();

const router = useRouter();
const onSubmit = async () => {
  try {
    await update(article.value!);
    router.push("/");
  } catch (err) {}
};
</script>

<style scoped></style>
