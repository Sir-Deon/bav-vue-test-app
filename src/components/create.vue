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
          <h4>Product Image:</h4>
          <input
            @change="upload"
            type="file"
            accept="image/*"
            ref="fileInput"
          />
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
    image: "",
    images: [],
    imageUrl: "",
    ref: firebase.firestore().collection("Products"),
    product: {
      image: "",
      name: "",
      price: 0,
      
    },
  }),
  methods: {
    remove(image) {
      const index = this.images.indexOf(image);
      this.images.splice(index, 1);
    },
    upload(pic) {
      this.images.push(pic.target.files[0]);
    },

    create() {
      var storageRef = firebase.storage().ref("images/" + this.images[0].name);
      let uploadTask = storageRef.put(this.images[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
         console.log(snapshot);
        },
        (error) => {
          // Handle unsuccessful uploads
          alert("Unable to create product", error)
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
             this.product.image = downloadURL
            
          });
        }
      );

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
