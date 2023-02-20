import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/layouts/blog.vue"),
    children: [
      {
        name: "article.index",
        path: "",
        component: () => import("@/views/article/index.vue"),
        children: [],
      },
      {
        name: "article.show",
        path: "article/:id",
        component: () => import("@/views/article/show.vue"),
        children: [],
      },
      {
        name: "article.create",
        path: "article",
        component: () => import("@/views/article/create.vue"),
        children: [],
        meta: { auth: true },
      },
      {
        name: "article.update",
        path: "article/:id",
        component: () => import("@/views/article/update.vue"),
        children: [],
        meta: { auth: true },
      },
      {
        name: "category.index",
        path: "category/:cid",
        component: () => import("@/views/category/index.vue"),
        children: [],
      },
      {
        name: "category.manage",
        path: "category/manage",
        component: () => import("@/views/category/manage.vue"),
        children: [],
        meta: { auth: true },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/auth/login.vue"),
    meta: { guest: true },
  },
  // {
  //   path: "/article",
  //   name: "article",
  //   component: () => import("@/views/member/article.vue"),
  // },
  {
    path: "/:any(.*)",
    name: "notFound",
    component: () => import("@/views/error/404.vue"),
  },
];
export default routes;
