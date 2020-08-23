import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add",
    name: "Add",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Add.vue"),
  },
  {
    path: "/eval",
    component: () =>
      import(/* webpackChunkName: "eval-values"*/ "../views/Eval.vue"),
    children: [
      {
        path: "",
        component: () => import("../components/Eval-Values.vue"),
      },
      {
        path: "funcs",
        component: () =>
          import(
            /* webpackChunkName: "eval-funcs"*/ "../components/Eval-Functions.vue"
          ),
      },
      {
        path: "powerups",
        component: () =>
          import(
            /* webpackChunkName: "eval-powerup"*/ "../components/Eval-Powerups.vue"
          ),
      },
    ],
  },
  {
    path: "/review",
    name: "Review",
    component: () => import("../views/Review.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
