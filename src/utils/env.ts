import _ from "lodash";
// 转换代码中得import.meta.env值得类型
const envs: any = _.cloneDeep(import.meta.env);
Object.entries(import.meta.env as Record<string, any>).forEach(
  ([key, value]) => {
    if (value === "true" || value === "false") {
      envs[key] = value === "true" ? true : false;
    }
    if (/^\d+$/.test(value)) {
      envs[key] = Number(value);
    }
    if (value === "null") envs[key] = null;
    if (value === "undefined") envs[key] = undefined;
  }
);
export default envs as Env;
