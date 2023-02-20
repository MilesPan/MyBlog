import router from "@/router";
import {
  addArticle,
  Article,
  deleteArticle,
  getAllArticle,
  getArticle,
  updateArticle,
} from "@/apis/article";
import { ElMessage, ElMessageBox } from "element-plus";

export default () => {
  const pageResult = ref<ResponsePageResult<ArticleModel>>();
  let categoryId: any = null;
  const article = ref<ArticleModel>();
  const all = async (page = 1, cid?: any) => {
    if (cid) categoryId = cid;
    pageResult.value = await getAllArticle(page, categoryId);
  };
  const find = async (id: number) => {
    article.value = await getArticle(id);
  };
  const add = async (data: Article) => {
    return addArticle(data);
  };
  const del = async (id: number) => {
    ElMessageBox.confirm("每篇文章都是心血,你是否确认删除", "三思而后行", {
      confirmButtonText: "就是要删",
      cancelButtonText: "还是留着吧",
      type: "warning",
    })
      .then(async () => {
        const res = await deleteArticle(id);
        if (Object.keys(res.data).length) {
          ElMessage.success("删除成功了捏!");
        }
        const { categoryId } = res.data;
        router.push({
          name: "category.index",
          params: { cid: categoryId },
        });
      })
      .catch(() => {
        ElMessage({
          type: "info",
          message: "每篇文章都是心血,不删为好",
        });
      });
  };
  const update = async (data: ArticleModel) => {
    return updateArticle(data);
  };
  return { all, pageResult, find, article, add, update, del };
};
