import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import NotFound from "@/views/NotFound";
import Login from "@auth/Login";
import Logout from "@auth/Logout";
import New from "@/views/New";
import Tasks from "@/views/Tasks";

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
    path: "/view-task/:id",
    name: "view-task",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
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
});

// не забудь удалить
// eslint-disable-next-line no-unused-vars
const auth = {
  isLoggedIn: () => false,
};

router.beforeEach((to) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !auth.isLoggedIn()) {
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
