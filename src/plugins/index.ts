import _ from "lodash";
import { App } from "vue";
import setupIconPark from "./iconpark";
// import setupElementplus from "./elementplus";
import setupPinia from "./pinia";
import { setupTailwindcss } from "./tailwindcss";
export function setupPlugins(app: App) {
  autoLoadComponent(app);
  setupTailwindcss();
  // setupElementplus(app);
  setupPinia(app);
  setupIconPark(app);
}
// 自动注册全局组件
function autoLoadComponent(app: App) {
  // 获取组件
  const component: Record<string, any> = import.meta.globEager(
    "../components/form/*.vue"
  );
  Object.keys(component).forEach((key) => {
    const name = key.split("/")?.pop()?.split(".")?.shift() as string;
    // camelCase 横线变成驼峰
    app.component(_.camelCase(name), component[key].default);
  });
}
