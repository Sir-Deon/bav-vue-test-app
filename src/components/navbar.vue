<template>
  <v-card flat>
    <v-toolbar color="indigo" dark extended flat>
      <h1>BAV Vuejs Test App</h1>
    </v-toolbar>

    <v-card class="mx-auto" max-width="1800" style="margin-top: -55px; padding-top: 10px">
      <v-toolbar flat>
        <v-toolbar-title>
          <v-avatar color="indigo">
            <v-icon dark>
              mdi-account-circle
            </v-icon>
          </v-avatar>
          John Doe
        </v-toolbar-title>

        <v-spacer></v-spacer>

       
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn depressed color="transparent" class="mr-2 grey--text" dark v-bind="attrs" v-on="on">
            <v-icon left>mdi-dots-vertical</v-icon>
            <span>Menu</span>
          </v-btn>
          
        </template>
        
        <v-list>
          <v-list-item v-for="link in links" :key="link.text"  :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      </v-toolbar>
    </v-card>
  </v-card>
</template>
<script>
export default {
  name: "navBar",
  data: () =>({
       links: [
        { text: "Create Product", route: "/createproduct" },
        { text: "Products", route: "/dashboard"},
        { text: "Product list", route: "/productlist" },
        { text: "Log Out", route: "/projects" },
      ],
  })
};
</script>

<style></style>
