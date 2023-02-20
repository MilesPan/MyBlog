// 根据views和layouts文件夹 来自动注册
import { envs } from "@/utils";
import { RouteRecordRaw } from "vue-router";
// {
//   path:"",
//   component: {
//   }
//   children: [];
// }
// 遍历文件
// 路由文件
const layouts = import.meta.globEager("../layouts/*.vue");
// 子路由文件,/**/*.vue 表示递归查找到子目录
const views = import.meta.globEager("../views/**/*.vue");
const layoutsRoutes: RouteRecordRaw[] = [];
function getRoutes() {
  let routes: RouteRecordRaw[] = [];
  Object.entries(layouts).forEach(([file, module]) => {
    const route = getRouteByModule(file, module as any);
    route.children = getChildrenRoutes(route);
    routes.push(route);
  });
  return routes;
}
// 根据Module获取加载的路由
function getRouteByModule(
  file: string,
  module: { [key: string]: any }
): RouteRecordRaw {
  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, "");
  const route: RouteRecordRaw = {
    name: name.replace("/", "."),
    path: `/${name!}`,
    component: module.default,
  };
  // 如果自定义route,就采用自定义的
  return Object.assign(route, module.default.route);
}
// 获取布局路由的子路由
function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
  const routes = [] as RouteRecordRaw[];
  Object.entries(views).forEach(([file, module]) => {
    if (file.includes(`../views/${layoutRoute.name as string}`)) {
      const route = getRouteByModule(file, module as any);
      routes.push(route);
    }
  });
  return routes;
}
// 环境变量里没有开启自动导入，则导出为空数组。
const routes = envs.VITE_ROUTER_AUTOLOAD
  ? getRoutes()
  : ([] as RouteRecordRaw[]);
export default getRoutes;
