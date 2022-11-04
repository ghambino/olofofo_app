import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:category",
      name: "category",
      component: HomeView,
      props: true,
    },
    {
      path: "/blog/:title",
      name: "title",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SingleNews.vue"),
      props: true,
    },
  ],
});

export default router;
