import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/components/HomeComp.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/components/AboutComp.vue"),
  },
  {
    path: "/tasks",
    name: "tasks",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/TaskView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "vue-school-active-link",
});

export default router;