import { RouteRecordRaw } from "vue-router";
// 根据自己写的module文件内容来自动注册
export default function autoloadModule() {
  const routes = [] as RouteRecordRaw[];
  const modules: { [key: string]: any } = import.meta.globEager(
    "../module/**/*.ts"
  );
  Object.keys(modules).forEach((key) => {
    routes.push(modules[key].default);
  });
  return routes;
}
