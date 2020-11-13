<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="400">
        <v-img
          height="200px"
          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        >
          <v-app-bar flat color="rgba(0, 0, 0, 0)">
            <v-spacer></v-spacer>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  depressed
                  color="transparent"
                  class="mr-2 white--text"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon left>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="link in links"
                  :key="link.text"
                  :to="link.route"
                >
                  <v-list-item-icon>
                    <v-icon>{{ link.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>
                    {{ link.text }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-app-bar>
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            Today
          </div>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "product",
  props: ["id", "image", "name", "Price"],
  data: () => ({
    links: [
      { icon: "mdi-pencil", text: "Edit", route: "/createproduct" },
      { icon: "mdi-delete", text: "Delete", route: "/dashboard" },
    ],
  }),
};
</script>

<style></style>
