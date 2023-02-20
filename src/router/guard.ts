import user from "@/store/user";
import { store } from "@/utils";
import { ElMessage } from "element-plus";
import { RouteLocationNormalized, Router } from "vue-router";
import { CacheEnum } from "./../enum/cacheTypes";
class Guard {
  constructor(private router: Router) {}
  public run() {
    this.router.beforeEach(this.beforeEach.bind(this));
  }
  private async beforeEach(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized
  ) {
    // 如果没有登录就跳转登录
    if (!this.isLogin(to)) return { name: "login" };
    // 如果不是游客就不能访问登录页
    if (!this.isGuest(to)) return from;
    await this.getUserInfo();
  }
  // 获取用户资料
  private getUserInfo() {
    if (this.getToken()) {
      return user().getUserInfo();
    }
  }
  private getToken(): string | null {
    return store.get(CacheEnum.TOKEN_NAME);
  }
  // 验证是否已登录
  private isLogin(route: RouteLocationNormalized) {
    // 不需要验证或者有token 才能顺利通过
    if (Boolean(!route.meta.auth || this.getToken())) {
      return true;
    } else {
      // 跳转到登录之前先保存当前目标页面
      // 这样登录后就可以直接到目标页面
      store.set(CacheEnum.REDIRECT_ROUTE, route.name);
      ElMessage({
        message: "登录已失效,请重新登录",
        type: "error",
      });
    }
  }
  // 验证是否是游客
  private isGuest(route: RouteLocationNormalized) {
    // 不需要验证或者没有token，说明是游客，才能访问login页面
    if (Boolean(!route.meta.guest || !this.getToken())) {
      return true;
    } else {
      ElMessage({
        message: "该页面游客才能访问",
        type: "error",
      });
      return false;
    }
  }
}
export default (router: Router) => {
  new Guard(router).run();
};
