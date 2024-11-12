<template>
  <div>
    <div class="container py-6 mx-auto">
      <h1 class="text-xl font-bold">{{ product.name }}</h1>
      <img
        :src="product.imageUrl"
        alt="Product Image"
        class="object-cover w-48 h-48 mt-4"
      />
      <p class="mt-4">Stock: {{ product.stock }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      product: {},
    };
  },
  async mounted() {
    const response = await axios.get(
      `http://localhost:3000/products/${this.$route.params.id}`
    );
    this.product = response.data;
  },
};
</script>
