import { createRouter, createWebHashHistory } from "vue-router";

import Login from "@auth/Login";
import Register from "@auth/Register";
import Dashboard from "@comp/Dashboard";
import MainPage from "@pages/MainPage";
import TestBtn from "@comp/TestBtn";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      meta: { title: "Login" },
      component: Login,
      // component: () => import("../login/Login.vue")
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/",
      name: "Home",
      component: MainPage,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/testbtn",
      name: "TestBtn",
      component: TestBtn,
    },
  ],
});

export default router;
