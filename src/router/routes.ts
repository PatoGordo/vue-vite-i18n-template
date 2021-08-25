import { RouteRecordRaw } from "vue-router";
import Home from "@/views/Home/index.vue";
import Page404 from "@/views/404/index.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Page404,
  },
];
