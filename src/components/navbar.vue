<template>
  <v-card flat>
    <v-toolbar color="indigo" dark extended flat>
      <h1>BAV Vuejs Test App</h1>
    </v-toolbar>

    <v-card
      class="mx-auto"
      style="margin-top: -55px; padding-top: 10px; width: 100%;"
    >
      <v-toolbar flat>
        <v-toolbar-title>
          <v-row>
           <v-col>
              <v-avatar color="indigo">
              <v-icon dark>
                mdi-account-circle
              </v-icon>
            </v-avatar>
           </v-col>
         <v-col>
             <v-btn depressed>{{name}}</v-btn>
         </v-col>
          </v-row>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              depressed
              color="transparent"
              class="mr-2 grey--text"
              dark
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left>mdi-dots-vertical</v-icon>
              <span>Menu</span>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="link in links"
              :key="link.text"
              :to="link.route"
            >
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn depressed @click="logOut">
          <v-icon color="red">
            mdi-logout
          </v-icon>
          Log Out</v-btn
        >
      </v-toolbar>
    </v-card>
  </v-card>
</template>
<script>
import firebase from "firebase";


export default {
  name: "navBar",
 
  data: () => ({
    name:"",
    email: null,
    password: '',
    links: [
      { text: "Create Product", route: "/createproduct" },
      { text: "Products", route: "/dashboard" },
      { text: "Product list", route: "/productlist" },
    ],
  }),
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        })
        .catch((err) => {
          alert("Error loging out", err);
        });
    },
  },
  mounted() {
    var user = firebase.auth().currentUser;
    this.email = user.email;
    this.password = user.password;
    const db = firebase.firestore();
    db.collection("profiles").doc(user.uid)
      .get()
      .then((user) => {
       this.name = user.data().name;
      });
  },
};
</script>

<style></style>
