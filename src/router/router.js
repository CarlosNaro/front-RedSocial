import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
// import Signup from "../views/SignupView.vue";

const routes = [
  { path: "/", name: "Home", component: Home },

  {
    path: "/Signup",
    name: "Signup",
    component: () => import("../views/SignupView.vue"),
  },

  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/Feed",
    name: "Feed",
    component: () => import("../views/FeedView.vue"),
  },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
