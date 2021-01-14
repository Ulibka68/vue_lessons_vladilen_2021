import { createRouter, createWebHashHistory } from "vue-router";

import Login from "@auth/Login";
import Register from "@auth/Register";

import MainPage from "@pages/MainPage";
import TestBtn from "@comp/TestBtn";
import HomePage from "@pages/HomePage";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },

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
      path: "/post/:uid",
      name: "resume",
      component: MainPage,
    },
    {
      path: "/testbtn",
      name: "TestBtn",
      component: TestBtn,
    },
  ],
});

export default router;
