import { createRouter, createWebHashHistory } from "vue-router";

import Login from "@auth/Login";
import Register from "@auth/Register";
import Dashboard from "@auth/Dashboard";
import MainPage from "@pages/MainPage";

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
  ],
});

export default router;
