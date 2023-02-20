<script setup lang="ts">
import PanButton from "@/components/form/pan-button.vue";
import v from "@/plugins/validate";
import { user } from "@/utils";
const { Field, Form, ErrorMessage } = v;
const onSubmit = async (value: any) => {
  user.login(value);
};
// 验证方式1:
// const schema = v.yup.object({
//   account: v.yup.string().required().email().label("账号"),
//   password: v.yup.string().required().min(3, "密码最短三位数").label("密码"),
// });
// 验证方式3:
const schema = {
  name: { required: true },
  password: { required: true, min: 3 },
};
</script>
<script lang="ts">
export default {
  // guest表示是游客才能访问
  route: { name: "login", meta: { guest: true } },
};
</script>
<template>
  <Form @submit="onSubmit" :validation-schema="schema" #default="{ errors }">
    <div
      class="w-[720px] translate-y-32 md:translate-y-0 bg-slate-400 md:grid grid-cols-2 rounded-md shadow-md overflow-hidden"
    >
      <div class="p-6 flex flex-col justify-between">
        <div>
          <h2 class="text-center text-gray-700 text-lg">登录</h2>
          <div class="mt-8">
            <!-- 验证方式2: -->
            <!--  :rules="{ required: true, email: true }" -->
            <Field
              name="name"
              label="账号"
              class="pan-input"
              value=""
              :validate-on-input="true"
              placeholder="请输入邮箱或者手机号"
            ></Field>
            <!-- 自定义错误信息 -->
            <ErrorMessage name="name" as="div" class="pan-error"></ErrorMessage>
            <Field
              type="password"
              name="password"
              value=""
              label="密码"
              class="pan-input mt-4"
              :validate-on-input="true"
              placeholder="请输入密码"
            ></Field>
            <!-- 组件错误信息 -->
            <ErrorMessage
              name="password"
              as="div"
              class="pan-error"
            ></ErrorMessage>
          </div>
          <PanButton />
          <div class="flex justify-center mt-3">
            <i
              class="fa-brands fa-weixin rounded-full p-2 bg-green-600 text-white cursor-pointer mr-4"
            ></i>
            <i
              class="fa-brands fa-qq rounded-full p-2 bg-blue-500 text-white cursor-pointer"
            ></i>
          </div>
        </div>
        <div class="flex gap-6 justify-center mt-6">
          <pan-link></pan-link>
          <a href="" class="text-xs text-gray-700 hover:text-teal-50">注册</a>
          <a href="" class="text-xs text-gray-700 hover:text-teal-50"
            >找回密码</a
          >
        </div>
      </div>
      <!-- 默认是消失，在md尺寸时出现 -->
      <div class="hidden md:block relative">
        <img
          src="@/../public/images/login.jpg"
          class="absolute h-full w-full object-cover"
          alt=""
        />
      </div>
    </div>
  </Form>
</template>

<style lang="scss" scoped>
form {
  @apply p-5 md:p-0 bg-slate-700 h-screen flex justify-center items-start md:items-center;
}
</style>
