<template>
  <div class="manage">
    <div class="control w-full h-full flex justify-between items-center">
      <div
        class="item"
        v-for="(item, index) in ManageList"
        @click="handleClick(item)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
  <Drawer :isShow="isShow" @handleClose="handleClose">
    <template #title>{{ title }}</template>
    <template #content>
      <template v-if="title === '新增栏目'">
        <div class="content flex flex-col items-center justify-center">
          <span class="text-2xl text-indigo-700 font-semibold"
            >请输入栏目名</span
          >
          <input
            type="text"
            id="pan-input"
            placeholder="请输入"
            v-model="inputName"
          />
        </div>
      </template>
      <template v-if="title === '修改栏目'">
        <div class="content flex flex-col items-center justify-center gap-2">
          <span class="text-2xl text-indigo-700 font-semibold"
            >请选择栏目名</span
          >
          <el-select
            class="mt-2"
            v-model="selectedId"
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
          <input
            type="text"
            id="pan-input"
            placeholder="请输入"
            v-model="inputName"
            :disabled="!selectedId"
            :class="{
              'cursor-not-allowed': !selectedId,
            }"
          />
        </div>
      </template>
      <template v-if="title === '删除栏目'">
        <div class="content flex flex-col items-center justify-center gap-2">
          <span class="text-2xl text-indigo-700 font-semibold"
            >请选择栏目名</span
          >
          <el-select
            class="mt-2"
            v-model="selectedId"
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
        </div>
      </template>
    </template>
    <template #footer>
      <template v-if="title === '新增栏目'">
        <div>
          <el-button type="danger" size="default" @click="handleCancel"
            >取消新增</el-button
          >
          <el-button type="success" size="default" @click="handleAdd"
            >确定新增</el-button
          >
        </div>
      </template>
      <template v-if="title === '修改栏目'">
        <div>
          <el-button type="danger" size="default" @click="handleCancel"
            >取消修改</el-button
          >
          <el-button type="success" size="default" @click="handleUpdate"
            >确定修改</el-button
          >
        </div>
      </template>
      <template v-if="title === '删除栏目'">
        <div>
          <el-button type="danger" size="default" @click="handleCancel"
            >取消删除</el-button
          >
          <el-button type="success" size="default" @click="handleDelete"
            >确定删除</el-button
          >
        </div>
      </template>
    </template>
  </Drawer>
</template>

<script setup lang="ts">
import useCategory from "@/composables/useCategory";
import { ElMessage } from "element-plus";

interface IManageItem {
  title: string;
  callback: Function;
}
const { add, del, update, categories, all } = useCategory();
await all();
const isShow = ref<boolean>(false);
const ManageList = ref<IManageItem[]>([
  { title: "新增栏目", callback: add },
  { title: "修改栏目", callback: del },
  { title: "删除栏目", callback: update },
]);
const title = ref<string>();
const selectedId = ref<number>();
const inputName = ref<string>("");
const handleClick = (item: IManageItem) => {
  isShow.value = true;
  title.value = item.title;
};
const handleClose = (Cshow: boolean) => {
  //   console.log(Cshow);
  isShow.value = Cshow;
};
const handleCancel = () => {
  isShow.value = false;
};
const handleAdd = async () => {
  const res = await add(inputName.value);
  if (res.id) {
    isShow.value = false;
    inputName.value = "";
    await all();
  }
};
const handleDelete = async () => {
  if (selectedId.value) {
    const res = await del(selectedId.value);
    if (res.id) {
      ElMessage.success(`${res.title}栏目删除成功`);
      isShow.value = false;
      selectedId.value = undefined;
      await all();
    }
  } else {
    ElMessage.error("请选择栏目");
  }
};
const handleUpdate = async () => {
  if (selectedId.value) {
    const data: CategoryModel = {
      id: selectedId.value,
      title: inputName.value,
    };
    const res = await update(data);
    if (res.id) {
      ElMessage.success("更新栏目成功");
      selectedId.value = undefined;
      inputName.value = "";
      isShow.value = false;
      await all();
    }
  } else {
    ElMessage.error("请选择栏目");
  }
};
</script>

<style scoped lang="scss">
.item {
  @apply w-[100px] h-[100px] flex justify-center items-center  rounded-full text-white bg-indigo-600 cursor-pointer p-4 hover:bg-green-600 duration-300;
}
#pan-input {
  @apply mt-4 border bg-slate-300 text-gray-700 border-white  placeholder-white  placeholder:text-xs outline-none rounded-lg py-1 px-2 focus:ring-2 ring-violet-700 ring-offset-2 ring-offset-transparent duration-300 focus:border-slate-400;
}
</style>
