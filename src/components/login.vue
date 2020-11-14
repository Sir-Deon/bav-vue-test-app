<template>
  <v-container>
    <p class="intro">BAV Vue Js Test App</p>
    <p class="heading">Log In</p>
    <v-card class="mx-auto card" max-width="544">
      <v-card-title>
        <v-icon class="icon" size="100"
          >mdi-account-circle</v-icon
        ></v-card-title
      >
      <v-container>
        <v-form>
          <v-text-field
            color="indigo"
            label="Email"
            v-model="email"
            prepend-icon="mdi-email"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            color="indigo"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            prepend-icon="mdi-lock"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-form>
        <v-row>
          <v-col cols="9">
            <v-btn @click="login" dark color="indigo">Log In</v-btn>
          </v-col>
          <v-col>
            <v-btn to="signup" color="green" dark>Sign Up</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: "",
      email:"",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  methods:{
    login(){
     if(this.password != "" && this.email != ""){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        () => {
          this.$router.push("/dashboard");
        },
        err =>{
          alert("Invalid email or password",err)
        }
      )
     }else {
       alert("Email or  password field should not be empty!!")
     }
    }
  }
};
</script>

<style scoped>
.card {
  margin-top: 20px;
}

.icon {
  margin-left: 40%;
}
.intro {
  text-align: center;
  margin-top: 50px;
  font-size: 3em;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  background-color: indigo;
  width: 100%;
}
.heading {
  text-align: center;
  margin-top: 150px;
  font-size: 2em;
}
</style>
