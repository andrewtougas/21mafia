import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/teams",
      name: "teams",
      component: () =>
        import("./views/Teams.vue")
    },
    {
      path: "/history",
      name: "history",
      component: () =>
        import("./views/History.vue")
    },
    {
      path: "/scoring",
      name: "scoring",
      component: () =>
        import("./views/Scoring.vue")
    },
    {
      path: "/teams-vs-opponents",
      name: "teams-vs-opponents",
      component: () =>
        import("./views/TeamsVsOpponents.vue")
    },
  ]
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
})

export default router;
