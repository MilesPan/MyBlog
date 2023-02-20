import vue from "@vitejs/plugin-vue";
import { Plugin } from "vite";
import autoImport from "./autoImport";
import { setupGzip } from "./gzip";
import setupMockPlugin from "./mock";
export default function setupPlugin(isBuild: boolean, env: Env) {
  const plugins: Plugin[] = [vue()];
  plugins.push(setupMockPlugin(isBuild));
  plugins.push(setupGzip());
  autoImport(plugins);
  return plugins;
}
