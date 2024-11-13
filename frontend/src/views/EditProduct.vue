<template>
  <div class="flex justify-center py-6 mx-auto">
    <div class="w-full max-w-xl p-6 bg-white rounded-md shadow-md">
      <h1 class="mb-4 text-xl font-bold">Edit Product</h1>
      <form @submit.prevent="updateProduct">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Product Name</label
          >
          <input
            v-model="product.name"
            type="text"
            id="name"
            class="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
            required
            maxlength="100"
          />
        </div>
        <div class="mb-4">
          <label for="imageUrl" class="block text-sm font-medium text-gray-700"
            >Image URL</label
          >
          <input
            v-model="product.imageUrl"
            type="url"
            id="imageUrl"
            class="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div class="mb-4">
          <label for="stock" class="block text-sm font-medium text-gray-700"
            >Stock</label
          >
          <input
            v-model="product.stock"
            type="number"
            id="stock"
            class="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
            required
            min="0"
            max="1000"
          />
        </div>
        <div class="flex items-center justify-end">
          <button
            type="submit"
            class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Save Changes
          </button>
          <button
            type="button"
            @click="cancelEdit"
            class="px-4 py-2 ml-2 text-black bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      product: {
        name: "",
        imageUrl: "",
        stock: 0,
      },
    };
  },
  async created() {
    await this.fetchProduct();
  },
  methods: {
    async fetchProduct() {
      try {
        const response = await axios.get(
          `http://localhost:3000/products/${this.$route.params.id}`
        );
        this.product = response.data;
      } catch (error) {
        console.error("Failed to fetch product:", error);
        alert("Failed to fetch product details. Please try again.");
      }
    },
    async updateProduct() {
      try {
        await axios.put(
          `http://localhost:3000/products/${this.$route.params.id}`,
          this.product
        );
        this.$router.push({ name: "Home" });
      } catch (error) {
        console.error("Failed to update product:", error);
        alert("Failed to update product. Please try again.");
      }
    },
    cancelEdit() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
/* Optional styles to enhance the form layout */
</style>
