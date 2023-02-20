import * as yup from "yup";
yup.setLocale({
  mixed: {
    //  '${label}是占位符,在链式调用时 .label('123')'
    required: "${label}必须输入",
  },
  string: {
    email: "邮箱格式错误",
  },
});
export default yup;
