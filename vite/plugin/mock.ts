import { viteMockServe } from "vite-plugin-mock";
export default function setupMockPlugin(isBuild: boolean) {
  return viteMockServe({
    // mock接口文件夹
    mockPath: "mock",
    // 开发环境启动mock
    localEnabled: !isBuild,
  });
}
