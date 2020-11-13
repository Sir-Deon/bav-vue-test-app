import Vue from "vue";
import VueRouter from "vue-router";
import signIn from "../views/signIn.vue";
import signUp from "../views/signUp.vue";
import dashBoard from "../views/dashboard.vue";
import createProduct from "../views/createProduct.vue";
import productList from "../views/productList.vue";

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
  {
    path: "/dashboard",
    name: "Dashboard",
    component: dashBoard
  },
  {
    path: "/createproduct",
    name: "createProduct",
    component: createProduct
  },
  {
    path: "/productlist",
    name: "productList",
    component: productList
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
