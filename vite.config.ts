import { visualizer } from "rollup-plugin-visualizer";
import { ConfigEnv, loadEnv } from "vite";
import alias from "./vite/alias";
import setupPlugin from "./vite/plugin";
import { parseEnv } from "./vite/util";
// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === "build";
  // 配置文件的目录
  const root = ".";
  // 得到配置项
  const env = parseEnv(loadEnv(mode, root));
  return {
    plugins: [...setupPlugin(isBuild, env), visualizer()],
    // plugins: [vue()],
    resolve: {
      alias,
    },
    build: {
      rollupOptions: {
        emptyOutDir: true,
        output: {
          manualChunks(id: string) {
            if (id.includes("node_modules")) {
              {
                return id
                  .toString()
                  .split("node_modules/")[1]
                  .split("/")[0]
                  .toString();
              }
            }
          },
        },
      },
    },
    server: {
      host: true,
      proxy: {
        "/api": {
          target: env.VITE_API_URL,
          changeOrigin: true,
        },
        "/captcha/api/math": {
          target: env.VITE_API_URL,
          changeOrigin: true,
        },
      },
    },
  };
};
