import { install } from "@icon-park/vue-next/es/all";
import "element-plus/dist/index.css";
import { App } from "vue";
export default function setupIconPark(app: App) {
  install(app);
}
