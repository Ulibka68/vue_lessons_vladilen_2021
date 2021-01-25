import {
  _RouteRecordBase,
  createRouter,
  createWebHistory,
  Router,
} from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

export type layoutType = { layout: "main" | "auth" };
type tMyRouteRecord = Omit<RouteRecordRaw, "meta"> & { meta: layoutType };

const routesPaths: tMyRouteRecord[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "main",
    },
  },
  {
    path: "/help",
    name: "Help",
    component: () => import("../views/Help.vue"),
    meta: {
      layout: "main",
    },
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("@/views/Auth.vue"),
    meta: {
      layout: "auth",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: (routesPaths as unknown) as RouteRecordRaw[],
});

export default router;
