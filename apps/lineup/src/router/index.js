import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/add",
    name: "Add",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Add.vue"),
    children: [
      {
        path: "eval-values",
        component: () =>
          import(
            /* webpackChunkName: "eval-values"*/ "../views/Eval-Values.vue"
          )
      },
      {
        path: "eval-funcs",
        component: () =>
          import(
            /* webpackChunkName: "eval-funcs"*/ "../views/Eval-Functions.vue"
          )
      },
      {
        path: "eval-powerup",
        component: () =>
          import(
            /* webpackChunkName: "eval-powerup"*/ "../views/Eval-Powerups.vue"
          )
      }
    ]
  },
  {
    path: "/review",
    name: "Review",
    component: () => import("../views/Review.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
