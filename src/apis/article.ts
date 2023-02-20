import { http } from "@/plugins/axios";
export function getAllArticle(page: number = 1, cid?: any) {
  const url = `article?page=${page}&` + (cid ? `category=${cid}` : "");
  return http.request<ArticleModel, ResponsePageResult<ArticleModel>>({
    url: url,
  });
}
export function getArticle(id: number) {
  return http
    .request<ArticleModel>({
      url: `article/${id}`,
    })
    .then((r) => r.data);
}
export interface Article {
  id?: number;
  title: string;
  content: string;
  categoryId: string | undefined;
}
export function addArticle(data: Article) {
  return http
    .request<ArticleModel>({
      url: `article`,
      method: "post",
      data: data,
    })
    .then((r) => r.data);
}
export function updateArticle(data: ArticleModel) {
  return http
    .request<ArticleModel>({
      url: `article/${data.id}`,
      method: "PATCH",
      data: data,
    })
    .then((r) => r.data);
}
export function deleteArticle(id: number) {
  return http.request<ArticleModel>({
    url: `article/${id}`,
    method: "DELETE",
  });
}
