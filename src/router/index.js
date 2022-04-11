import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/auth/LoginView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/auth/SignupView.vue"),
  },
  {
    path: "/social",
    name: "social",
    component: () => import("../views/SocialView.vue"),
  },
  {
    path: "/heal4you",
    name: "heal4you",
    component: () => import("../views/AppView.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/heal4you/diet",
    name: "diet",
    component: () => import("../views/diet/DietView.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/heal4you/diet/:id",
    name: "dietItem",
    component: () => import("../views/diet/DietItem.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/heal4you/sports",
    name: "exercises",
    component: () => import("../views/exercises/ExercisesView"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/heal4you/sports-group/:id",
    name: "exercises_detail",
    component: () => import("../views/exercises/ExercisesItem"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/heal4you/sport/:id",
    name: "sport",
    component: () => import("../components/CurrentSportDetail"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/heal4you/daily-routines",
    name: "routines",
    component: () => import("../views/RoutinesView"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/heal4you/bmi",
    name: "bmi",
    component: () => import("../views/BmiView"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
