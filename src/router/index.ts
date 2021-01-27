import {
  _RouteRecordBase,
  createRouter,
  createWebHistory,
  Router,
} from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { store } from "@/store";
import Home from "../views/Home.vue";
import Request from "@/views/Request.vue";

export type layoutType = { layout: "main" | "auth"; auth: boolean };
type tMyRouteRecord = Omit<RouteRecordRaw, "meta"> & { meta: layoutType };

const routesPaths: tMyRouteRecord[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "main",
      auth: true,
    },
  },
  {
    path: "/help",
    name: "Help",
    component: () => import("../views/Help.vue"),
    meta: {
      layout: "main",
      auth: true,
    },
  },
  {
    path: "/request/:id",
    name: "Request",
    component: Request,
    meta: {
      layout: "main",
      auth: true,
    },
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("@/views/Auth.vue"),
    meta: {
      layout: "auth",
      auth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: (routesPaths as unknown) as RouteRecordRaw[],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  const requireAuth: boolean = to.meta.auth;
  if (requireAuth && store.getters["auth/isAuthenticated"]) {
    next();
  } else if (requireAuth && !store.getters["auth/isAuthenticated"]) {
    next("/auth?message=" + to.path);
  } else {
    next();
  }
});

export default router;
