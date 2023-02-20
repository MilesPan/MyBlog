import "vue-router";
import { IMenu } from "./menu";
// 路由元信息类型定义
declare module "vue-router" {
  interface RouteMeta {
    // 是否登录才能进入
    auth?: boolean;
    // 是否游客才能进入
    guest?: boolean;
    // 是否在菜单中显示
    show?: boolean;
    menu?: IMenu;
    // 访问权限
    permission?: string;
  }
}
