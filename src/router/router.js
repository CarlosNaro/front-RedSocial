import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
// import Signup from "../views/SignupView.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/LoginView.vue"),
  },

  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/SignupView.vue"),
  },

  { path: "/home", name: "Home", component: Home },

  
  {
    path: "/",
    name: "feed",
    component: () => import("../views/FeedView.vue"),
  },

  {
    path: "/messages",
    name: "Messages",
    component: () => import("../views/MessagesView.vue"),
  },

  {
    path: "/search",
    name: "Search",
    component: () => import("../views/SearchView.vue"),
  },


];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
