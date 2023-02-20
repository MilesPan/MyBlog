import { http } from "@/plugins/axios";
export interface User {
  name: string;
  age: number;
  avator: string;
  permissions: string[];
}
function userInfo() {
  return http.request<User>({
    url: "user/info",
  });
}

interface Login {
  token: string;
}
export interface LonginData {
  account: string | number;
  password: string;
}
function login(data: any) {
  return http.request<Login>({
    url: "login",
    method: "post",
    data,
  });
}
export default { userInfo, login };
