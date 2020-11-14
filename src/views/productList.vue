<template>
  <div>
    <NavBar />
    <v-card width="800" class="mx-auto  my-5">
      <v-container>
        <v-row>
          <v-col>
            <h1>Product List</h1>
          </v-col>
          <v-col>
            <v-btn to="createproduct" color="indigo" dark>Create New Product</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            Product name
          </v-col>
          <v-col>
            Price FCFA
          </v-col>
          <v-col>
            Actions
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row v-for="(product, index) in products" :key="product.id">
          <v-col>
            {{ product.data().name }}
          </v-col>
          <v-col>
            {{ product.data().price }}
          </v-col>
          <v-col>
            <v-row>
              <Update :name="product.data().name" :price="product.data().price" :id="product.id"/>
              <v-btn color="red" style="position: relative; left: -170px" @click="deleteProduct(product.id, index)" icon>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import NavBar from "@/components/navbar";
import Update from "@/components/update";
import firebase from "firebase";

export default {
  name: "productList",
  components: {
    NavBar,
    Update
  },
  data: () => ({
    db: firebase.firestore(),
    products: [],
  }),
  methods: {
    getProducts() {
      this.db
        .collection("Products")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            this.products.push(doc);
          });
        });
    },

    deleteProduct(doc, index){
        if(confirm('Are you sure?')){
          this.db.collection("Products").doc(doc).delete().then(() => {
            this.products.splice(index)
          }).catch((err) =>{
            console.error("Error Occured while deleting", err);
          })
        }else{
          return
        }
    }
  },

  mounted() {
    this.getProducts();
  },
};
</script>

<style scoped></style>
