import Vue from "vue";
import Router from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Classroom from "../views/Classroom.vue";
import Student from "../views/Student.vue";
import Score from "../views/Score.vue";
import Account from "../views/Account.vue";
Vue.use(Router);

var router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
      // meta: {
      //   requiresAuth: false
      // }
    },
    {
      path: "/classroom",
      name: "classroom",
      component: Classroom
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/student",
      name: "student",
      component: Student
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/score",
      name: "score",
      component: Score
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/account",
      name: "account",
      component: Account
      // meta: {
      //   requiresAuth: true
      // }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    var token = localStorage.access_token;
    if (typeof token === "undefined") {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
