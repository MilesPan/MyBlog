import {
  addCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "@/apis/category";
import { ElMessage } from "element-plus";

export default () => {
  const categories = ref<CategoryModel[]>();
  const all = async () => {
    categories.value = await getAllCategory();
  };
  const update = async (data: CategoryModel) => {
    return updateCategory(data);
  };
  const add = async (title: string): Promise<CategoryModel> => {
    try {
      const res = await addCategory(title);
      if (res.id) {
        ElMessage.success(`${res.title}栏目创建成功`);
      } else {
        ElMessage.error(`创建失败`);
      }
      return res;
    } catch (err: any) {
      return err;
    }
  };
  const del = async (id: number) => {
    return deleteCategory(id);
  };
  return { all, categories, update, add, del };
};
