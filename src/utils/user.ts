import userApi, { LonginData } from "@/apis/user";
import router from "@/router";
import userStore from "@/store/user";
import { ElMessage } from "element-plus";
import { CacheEnum } from "./../enum/cacheTypes";
import store from "./store";
function logout() {
  store.remove(CacheEnum.TOKEN_NAME);
  router.push("/");
  userStore().info = null;
}
async function login(values: LonginData) {
  const {
    data: { token },
  } = await userApi.login(values);
  store.set(CacheEnum.TOKEN_NAME, token, 3000);
  ElMessage({
    message: "登录成功",
    type: "success",
  });
  const routeName = store.get(CacheEnum.REDIRECT_ROUTE) ?? "article.index";
  router.push({ name: routeName });
}
function isLogin(): boolean {
  return !!store.get(CacheEnum.TOKEN_NAME);
}
export default { logout, login, isLogin };
