import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage";
import ReusablePage from "@/pages/ReusablePage";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomePage },
    { path: "/reusable", name: "", component: ReusablePage },
    // { path: "", name: "", component: a }
    // { path: "", name: "", component: a }
    // { path: "", name: "", component: a }
    // { path: "", name: "", component: a }
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});
