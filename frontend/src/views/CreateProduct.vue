<template>
  <div>
    <div class="container py-6 mx-auto">
      <h1 class="text-xl font-bold">Create Product</h1>
      <form @submit.prevent="createProduct" class="mt-4">
        <div>
          <label for="name" class="block">Product Name</label>
          <input
            v-model="product.name"
            type="text"
            id="name"
            class="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div class="mt-4">
          <label for="imageUrl" class="block">Product Image URL</label>
          <input
            v-model="product.imageUrl"
            type="text"
            id="imageUrl"
            class="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div class="mt-4">
          <label for="stock" class="block">Stock</label>
          <input
            v-model="product.stock"
            type="number"
            id="stock"
            class="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div class="mt-4">
          <button
            type="submit"
            class="px-4 py-2 text-white bg-blue-500 rounded"
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      product: {
        name: "",
        imageUrl: "",
        stock: 0,
      },
    };
  },
  methods: {
    async createProduct() {
      await axios.post("http://localhost:3000/products", this.product);
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
