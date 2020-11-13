<template>
  <div>
      <NavBar/>
      <v-container>
          <h1>Products</h1>
          <v-divider></v-divider>
           <v-row>
              <v-col v-for="product in products" :key="product.name">
                   <Product :name="product.name" :price="product.price" :image="product.image"/>
              </v-col>
           </v-row>
      </v-container>
     
  </div>
</template>

<script>
import firebase from "firebase";
import NavBar from "@/components/navbar"
import Product from "@/components/product"
export default {
    name: "dashboard",
    components:{
        NavBar,
        Product
    },
    data: () => ({
        products: []
    }),
    mounted(){
     const db = firebase.firestore();
     db.settings({timestampsInSnapshots: true})


    db.collection('Products').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
      
          this.products.push(doc.data())
        })
    }
      
    )
    }
}
</script>

<style scoped>

</style>
