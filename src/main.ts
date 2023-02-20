import App from "@/App.vue";
import router, { setupRouter } from "@/router";
import "@/styles/global.scss";
import "animate.css";
import "default-passive-events";

import { createApp } from "vue";
import { setupPlugins } from "./plugins";
async function bootstrap() {
  const app = createApp(App);
  setupPlugins(app);
  setupRouter(app);
  //   路由处理完成后再挂载组件
  await router.isReady();
  app.mount("#app");
}
bootstrap();
