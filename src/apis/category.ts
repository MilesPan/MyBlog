import { http } from "@/plugins/axios";
export function getAllCategory() {
  return http
    .request<CategoryModel[]>({
      url: "category",
      method: "get",
    })
    .then((r) => r.data);
}
export function addCategory(title: string) {
  return http
    .request<CategoryModel>({
      url: "category",
      method: "post",
      data: { title: title },
    })
    .then((r) => r.data);
}
export function updateCategory(data: CategoryModel) {
  return http
    .request<CategoryModel>({
      url: `category/${data.id}`,
      method: "PATCH",
      data: data,
    })
    .then((r) => r.data);
}
export function deleteCategory(id: number) {
  return http
    .request<CategoryModel>({
      url: `category/${id}`,
      method: "DELETE",
    })
    .then((r) => r.data);
}
