import { defineStore } from "pinia";
export default defineStore("loading", {
  state: () => ({
    show: false,
  }),
  actions: {
    closeLoading() {
      this.show = false;
    },
    openLoading() {
      this.show = true;
    },
  },
});
