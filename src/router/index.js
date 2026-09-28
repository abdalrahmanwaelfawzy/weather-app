import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import HomePage from "@/views/HomeView.vue";
import AboutPage from "@/views/AboutView.vue";
import ForecastPage from "@/views/ForecastView.vue";
const routes = [
  { path: "/", name: "HomeDefault", component: Home },
  { path: "/home", name: "HomePage", component: HomePage },
  { path: "/about", name: "AboutPage", component: AboutPage },
  { path: "/forecast", name: "ForecastPage", component: ForecastPage },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
