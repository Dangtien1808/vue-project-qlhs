import Vue from "vue";
import Router from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import ListClassroom from "../components/classrooms/List.vue";
import DetailClassroom from "../components/classrooms/Detail.vue";
import StatisticalClassroom from "../components/classrooms/Statistical.vue";
import Classroom from "../views/Classroom.vue";
import Student from "../views/Student.vue";
import Score from "../views/Score.vue";
import Account from "../views/Account.vue";
import ProFile from "../views/ProFile.vue";

import store from "../vuex/store";
// import classrooms from "../vuex/api/services/classrooms";

Vue.use(Router);

var router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/profile",
      name: "profile",
      component: ProFile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/classroom",
      component: Classroom,
      meta: {
        requiresAuth: true
      },
      children: [
        { path: "", name: "classroom/list", component: ListClassroom },
        {
          path: "detail",
          name: "classroom/detail",
          component: DetailClassroom,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "statistical",
          name: "classroom/statistical",
          component: StatisticalClassroom,
          meta: {
            requiresAuth: true
          }
        }
      ]
    },
    {
      path: "/student",
      name: "student",
      component: Student,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/score",
      name: "score",
      component: Score,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/account",
      name: "account",
      component: Account,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth) {
    if (!router.app.$session.get("username")) {
      next({
        path: "/login"
        // query: {
        //   redirect: to.fullPath
        // }
      });
    } else {
      store.dispatch("setIsLogin");
      store.dispatch("loadInfoUser", router.app.$session.get("username"));
      // store.dispatch("fetchAllAccount");
    }
  }

  next();
});

export default router;
