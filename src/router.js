import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login";
import Forget from "@/views/Forget";
import Dashboard from "@/views/Dashboard";
import Mail from "@/views/Mail";
import AppEmailBody from "@/components/AppEmailBody";
import NotFound from "@/views/NotFound";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/login", component: Login, alias: "/" },
    { path: "/forget", component: Forget, meta: { cantEnter: true } },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "home",
      beforeEnter() {
        // метод вызывается до того как перейти на страницу
        console.log("BeforeEnter");
      },
    },
    {
      path: "/mail",
      component: Mail,
      children: [{ path: ":mailId?", component: AppEmailBody, props: true }],
    },
    // { path: "/:notFound(.*)", redirect: "/login" },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  //замен названия классов по умолчанию
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  if (to.meta.cantEnter) {
    // защита Forget - нельзя перейти по адресу Forhet
    // next(false);
    // next("/dashboard"); // редирекут на dashborad
    next({ name: "home" }); // редирекут на dashborad
  } else next();
});

// можно собрать аналитику
// router.afterEach()

export default router;
