interface ResponseResult<T> {
  data: T;
}
interface ResponsePageResult<T> {
  data: T[];
  meta: {
    current_page: number;
    page_row: number;
    total: number;
    total_page: number;
  };
}
