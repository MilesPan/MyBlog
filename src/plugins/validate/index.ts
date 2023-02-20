import { localize } from "@vee-validate/i18n";
import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json";
import rules from "@vee-validate/rules";
import * as veeValidate from "vee-validate";
import yup from "./yup";
// 注册所有的ruile
Object.keys(rules).forEach((key) => {
  veeValidate.defineRule(key, rules[key]);
});
veeValidate.configure({
  // validateOnInput: true,
  generateMessage: localize("zh_CN", zh_CN),
});
const modules = {
  yup,
  ...veeValidate,
};
export default modules;
