import Vue from "vue";
import VueRouter from "vue-router";
import signIn from "../views/signIn.vue";
import signUp from "../views/signUp.vue";
import dashBoard from "../views/dashboard.vue";
import createProduct from "../views/createProduct.vue";
import productList from "../views/productList.vue";
import firebase from "firebase"

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
    component: dashBoard,
    meta: {requiresAuth: true},
  },
  {
    path: "/createproduct",
    name: "createProduct",
    component: createProduct,
    meta: {requiresAuth: true},
  },
  {
    path: "/productlist",
    name: "productList",
    component: productList,
    meta: {requiresAuth: true},
  },
  
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
   const requiresAuth = to.matched.some(X => X.meta.requiresAuth)
   const currentUser = firebase.auth().currentUser;

   if(requiresAuth && !currentUser){
     next('/')
   } else if(requiresAuth && currentUser){
     next()
   } else {
     next()
   }
}) 


export default router;
