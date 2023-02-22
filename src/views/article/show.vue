<template>
  <main>
    <h1 class="flex justify-between">
      {{ article?.title }}
      <section>
        <el-button
          type="primary"
          size="default"
          @click="
            $router.push({
              name: 'article.update',
              params: { id: article?.id },
            })
          "
          v-if="user.isLogin()"
          >编辑文章</el-button
        >
        <el-button
          type="danger"
          size="default"
          @click="del(article!.id)"
          v-if="user.isLogin()"
          >删除文章</el-button
        >
      </section>
    </h1>

    <section class="flex justify-between">
      <time
        >发表时间:{{ article?.createdAt }} &nbsp;&nbsp;&nbsp;更新时间:{{
          article?.updatedAt
        }}</time
      >
      <aside>浏览次数:{{ article?.readTimes }}</aside>
    </section>

    <p class="editor-content-view" v-html="article?.content"></p>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import useArticle from "@/composables/useArticle";
import user from "@/utils/user";
const { article, find, del } = useArticle();
const route = useRoute();
await find(+route.params.id);
</script>

<style scoped lang="scss">
main {
  h1 {
    @apply mb-2 border-b border-gray-600 pb-3 mt-4 text-lg text-gray-600;
  }
  time,
  aside {
    @apply text-xs font-bold text-gray-400 my-2 block;
  }
}
</style>
