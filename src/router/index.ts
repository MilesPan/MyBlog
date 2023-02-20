import userStore from "@/store/user";
import { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import autoload from "./autoload";
// 自动注册的路由
import guard from "./guard";
import routes from "./router";
const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
});
export async function setupRouter(app: App) {
  const user = userStore();
  await user.getUserInfo();
  autoload(router);
  // 路由守卫
  guard(router);
  app.use(router);
}
export default router;
