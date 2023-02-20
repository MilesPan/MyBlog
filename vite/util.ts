import _ from "lodash";

// 解析env环境变量，转换类型
export function parseEnv(env: Record<string, any>): Env {
  const cloneEnv: any = _.cloneDeep(env);
  Object.entries(env).forEach(([key, value]) => {
    if (value === "true" || value === "false") {
      cloneEnv[key] = value === "true" ? true : false;
    }
    if (/^\d+$/.test(value)) {
      cloneEnv[key] = Number(value);
    }
  });
  return cloneEnv;
}
