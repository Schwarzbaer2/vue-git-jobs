import { createRouter, createWebHistory } from "vue-router";
import Jobs from "../views/Jobs.vue";

const routes = [
  {
    path: "/",
    name: "Jobs",
    component: Jobs,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
