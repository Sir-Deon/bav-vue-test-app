<template>
  <div>
    <NavBar />
    <v-container>
      <h1>Products</h1>
      <v-divider></v-divider>
      <v-row>
        <v-col v-for="product in products" :key="product.name">
          <div v-if="products.length > 0">
            <Product
              :name="product.name"
              :price="product.price"
              :image="product.image"
            />
          </div>
        </v-col>
      </v-row>
      <div v-if="products.length < 1">
        <div align="center">
            <v-img  class="my-4" src="../assets/image1.png" max-height="700" max-width="500"></v-img>
        </div>
        <v-row class="area">
            <p style="color: indigo">No Products to display!!</p>
            <v-btn class="mx-4 green--text" depressed  to="createproduct">Create a New Product</v-btn>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import firebase from "firebase";
import NavBar from "@/components/navbar";
import Product from "@/components/product";
export default {
  name: "dashboard",
  components: {
    NavBar,
    Product,
  },
  data: () => ({
    products: [],
  }),
  mounted() {
    const db = firebase.firestore();
    db.collection("Products")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.products.push(doc.data());
        });
      });
  },
};
</script>

<style scoped>
.area{
   justify-content: center;
}
</style>
