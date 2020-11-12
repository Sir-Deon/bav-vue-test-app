import Vue from "vue";
import VueRouter from "vue-router";
import signIn from "../views/signIn.vue";
import signUp from "../views/signUp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: signIn
  },
  {
    path: "/signup",
    name: "SignUp",
    component: signUp
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
