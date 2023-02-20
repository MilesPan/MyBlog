import userStore from "@/store/user";
import { envs } from "@/utils";
import { Router, RouteRecordRaw } from "vue-router";
import autoloadModule from "./loadByModule";
import getRoutes from "./loadByViews";
let routes: RouteRecordRaw[] = envs.VITE_ROUTER_AUTOLOAD
  ? getRoutes()
  : autoloadModule();
function autoload(router: Router) {
  const userinfo = userStore()?.info;
  // 过滤掉权限路由
  routes = routes.map((route) => {
    route.children = route.children?.filter((r) => {
      const permission = r.meta?.permission;
      return permission ? userinfo?.permissions.includes(permission) : true;
    });
    return route;
  });

  routes.forEach((r) => router.addRoute(r));
}
export default autoload;
