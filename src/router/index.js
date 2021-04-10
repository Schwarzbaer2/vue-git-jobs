import { createRouter, createWebHistory } from "vue-router";
import Jobs from "../views/Jobs.vue";
import JobDetails from "../views/JobDetail.vue";

const routes = [
  {
    path: "/",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/job/:id",
    name: "JobDetails",
    props: true,
    component: JobDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
