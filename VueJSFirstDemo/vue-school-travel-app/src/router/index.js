import { createRouter, createWebHistory } from "vue-router";
import sourceData from "@/data.json";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home-view" */ "@/views/HomeView.vue"),
  },

  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () =>
      import(
        /* webpackChunkName: "destination-show" */ "@/views/DestinationShow.vue"
      ),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    beforeEnter(to) {
      const exist = sourceData.destinations.find(
        (dest) =>
          dest.id === parseInt(to.params.id) && dest.slug === to.params.slug
      );

      if (!exist)
        return {
          name: "not-found",
          query: { url: to.path },
          hash: to.hash,
        };
    },
    children: [
      {
        path: "/destination/:id/:slug/:experienceSlug",
        name: "experience.show",
        component: () =>
          import(
            /* webpackChunkName: "experience-show" */ "@/views/ExperienceShow.vue"
          ),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
        beforeEnter(to) {
          const exist = sourceData.destinations.find(
            (dest) =>
              dest.id === parseInt(to.params.id) &&
              dest.experiences.some((d) => d.slug === to.params.experienceSlug)
          );

          if (!exist)
            return {
              name: "not-found",
              query: { url: to.path },
              hash: to.hash,
            };
        },
      },
    ],
  },

  {
    name: "not-found",
    path: "/:notFound(.*)*",
    component: () => import("@/components/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "vue-school-active-link",
});

export default router;
// {
//   path: "/about",
//   name: "about",
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () =>
//     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
// },
