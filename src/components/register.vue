<template>
  <v-container>
    <p class="intro">BAV Vue Js Test App</p>
    <p class="heading">Sign Up</p>
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
           <v-text-field
            v-model="password"
            color="indigo"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            prepend-icon="mdi-lock"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Confirm Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-form>
        <v-row>
          <v-col>
            <v-btn dark color="indigo">Sign Up</v-btn>
          </v-col>
           <v-col>
            <v-btn to="/" color="green" dark>Already have an account?</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
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
  color: indigo;
}
.heading {
  text-align: center;
  margin-top: 150px;
  font-size: 2em;
}
</style>
