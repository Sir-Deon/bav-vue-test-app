<template>
  <v-row>
    <v-btn color="primary" icon @click.stop="dialog = true">
      <v-icon>mdi-pencil</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" max-width="400">
      <v-card class="p-5">
        <v-card-title class="headline">
          Edit Product
        </v-card-title>

        <v-card-content>
          <v-container>
            <v-text-field v-model="name" label="Product name"></v-text-field>
            <v-text-field v-model="price" label="Price"></v-text-field>
          </v-container>
        </v-card-content>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            Cancle
          </v-btn>

          <v-btn
            @click="editProduct"
            color="green darken-1"
            text
          >
            Update
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import firebase from "firebase";

export default {
  props: ["name", "price", "id"],
  data() {
    return {
      dialog: false,
      db: firebase.firestore(),
      product:{
          image: null,
          name: '',
          price: '',
      }
    };
  },

  methods: {
    editProduct() {
        this.product.image = null,
        this.product.name = this.name,
        this.product.price = this.price,
        this.db.collection("Products").doc(this.id).update(this.product).then(() => {
            this.dialog = false;
            alert("Product updated successfully");
            window.location.reload()
        }).catch((err) => {
            alert("Update unsuccessful because", err)
        });

    },
  },
};
</script>

<style scoped></style>
