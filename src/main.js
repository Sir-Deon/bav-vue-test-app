import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";
import 'firebase/storage';


var firebaseConfig = {
  apiKey: "AIzaSyD2lXd8ZC5iXQw23bAB-W_LCCHGZswDHIQ",
  authDomain: "bav-vuejs-test-app.firebaseapp.com",
  databaseURL: "https://bav-vuejs-test-app.firebaseio.com",
  projectId: "bav-vuejs-test-app",
  storageBucket: "bav-vuejs-test-app.appspot.com",
  messagingSenderId: "526497274445",
  appId: "1:526497274445:web:de08b171306fa187a89a04"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({timestampsInSnapshots: true})

Vue.config.productionTip = false;

let app = '';

firebase.auth().onAuthStateChanged(() =>{
  if(!app){
    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
    
  }
});


