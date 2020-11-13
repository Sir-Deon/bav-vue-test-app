<template>
  <div>
      <NavBar/>
      <Create/>
  </div>
</template>

<script>

import NavBar from "@/components/navbar";
import Create from "@/components/create";
export default {
    name: "createProduct",
    components:{
        NavBar,
        Create
        
    }

}
</script>

<style scoped>

</style>
