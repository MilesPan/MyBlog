import userApi, { User } from "@/apis/user";
import { defineStore } from "pinia";
export default defineStore("user", {
  state: () => ({
    info: {} as null | User,
  }),
  actions: {
    async getUserInfo() {
      const info = await userApi.userInfo();
      this.info = info.data;
    },
  },
});
