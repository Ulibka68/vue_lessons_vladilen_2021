import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import { computed } from "vue";

import Home from "@/views/Home";
import NotFound from "@/views/NotFound";
import Login from "@auth/Login";
import Logout from "@auth/Logout";
import New from "@/views/New";
import Tasks from "@/views/Tasks";

import Register from "@auth/Register";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: Tasks,

    meta: { requiresAuth: true },
  },
  {
    path: "/create-task",
    name: "create-task",
    component: New,
    meta: { requiresAuth: true },
  },
  {
    path: "/viewtask/:id",
    name: "viewtask",
    component: Tasks,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },

  { path: "/:notFound(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  //замен названия классов по умолчанию
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

const isLogged = computed(() => store.getters["Auth/isLogged"]);

router.beforeEach((to) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !isLogged.value) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: "/login",
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    };
  }
});

export default router;
