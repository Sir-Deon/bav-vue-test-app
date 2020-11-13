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
          ></v-text-field>
          <v-text-field color="indigo" label="Product Price"></v-text-field>
          <h4>Product Image:</h4>
          <input
            @change="preview"
            style="display: none;"
            type="file"
            accept="image/*"
            ref="fileInput"
          />
          <div class="image-part">
            <v-row>
              <span v-for="image in images" :key="image">
                <img class="pic" height="100" :src="image" />
                <div class="delete" @click="remove(image)">
                  <v-icon>mdi-delete</v-icon>
                </div>
              </span>
              <v-btn
                class="mx-3"
                fab
                depressed
                v-if="images.length < 1" 
                @click="$refs.fileInput.click()"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-row>
          </div>
        </v-form>
        <v-row>
          <v-col>
            <v-btn to="dashboard" dark color="indigo">Create Product</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "create",
 data: () => ({
     image: '',
     images: [],
 }),
  methods: {
    remove(image) {
      const index = this.images.indexOf(image);
      this.images.splice(index, 1);
    },
    preview(pic) {
      this.images.push(URL.createObjectURL(pic.target.files[0]));
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
