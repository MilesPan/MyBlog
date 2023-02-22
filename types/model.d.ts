interface CategoryModel {
  id: number;
  title: string;
}
interface ArticleModel {
  id: number;
  title: string;
  content: string;
  categoryId: number;
  readTimes: number;
  category: CategoryModel;
  createdAt: string;
  updatedAt: string;
}
