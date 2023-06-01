import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
// import Signup from "../views/SignupView.vue";

const routes = [
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/LoginView.vue"),
  },

  {
    path: "/Signup",
    name: "Signup",
    component: () => import("../views/SignupView.vue"),
  },

  { path: "/", name: "Home", component: Home },

  {
    path: "/Feed",
    name: "Feed",
    component: () => import("../views/FeedView.vue"),
  },

  {
    path: "/Messages",
    name: "messages",
    component: () => import("../views/MessagesView.vue"),
  },


];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
