import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import { Plugin } from "vite";
export default function setupElementPlusPlugin(plugins: Plugin[]) {
  plugins.push(
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ["vue", "vue-router"],
      dts: "types/auto-imports.d.ts",
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dirs: ["src/components"],
      // 防重名
      directoryAsNamespace: true,
      dts: "types/components.d.ts",
    })
  );
}
