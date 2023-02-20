// 环境变量 类型声明文件
interface Env {
  VITE_ROUTER_AUTOLOAD: boolean;
  VITE_API_URL: string;
}

// 代码中使用环境变量 有代码提示
interface ImportMetaEnv extends Env {}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
