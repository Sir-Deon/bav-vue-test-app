<template>
  <div>
    <v-card class="mx-auto card" max-width="944">
      <v-card-title>
        <v-icon class="icon" size="100">mdi-mail</v-icon>
        <h1 style="color: #ccb">Create Product</h1>
      </v-card-title>
      <v-container>
        <v-form>
          <v-text-field
            color="indigo"
            label="Product Name"
            required
            v-model="product.name"
          ></v-text-field>
          <v-text-field
            color="indigo"
            v-model="product.price"
            label="Product Price"
          ></v-text-field>
        </v-form>
        <v-row>
          <v-col>
            <v-btn @click="create" dark color="indigo">Create Product</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "create",
  data: () => ({
    ref: firebase.firestore().collection("Products"),
    product: {
      name: "",
      price: 0,
      
    },
  }),
  methods: {

    create() {
      this.ref
        .add(this.product)
        .then((element) => {
          console.log(element);
          (this.product.name = ""), (this.product.price = "");
           this.$router.push("/dashboard");
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 100px;
}
.image-part {
  height: 100px;
  width: 19%;
  background-color: #ccc;
  border-radius: 10px;
  padding: 20px;
}

.pic {
  padding: 10px;
  margin-top: -20px;
}
.delete {
  background: #fff;
  position: relative;
  top: -55%;
  left: 24%;
  opacity: 0;
  width: 35px;
  padding: 5px;
  border-radius: 5px;
}
.delete:hover {
  background: #fff;
  opacity: 0.5;
  cursor: pointer;
}
</style>
