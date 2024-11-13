<template>
  <div>
    <div class="container py-6 mx-auto">
      <h1 class="text-xl font-bold">Edit Product</h1>
      <form @submit.prevent="updateProduct" class="mt-4">
        <div>
          <label for="name" class="block">Product Name</label>
          <input
            v-model="product.name"
            type="text"
            id="name"
            class="w-full px-4 py-2 border rounded"
            required
            maxlength="100"
          />
        </div>

        <!-- Add price input here -->
        <div class="mt-4">
          <label for="price" class="block">Price (Rp)</label>
          <input
            v-model="formattedPrice"
            @input="formatPrice"
            type="text"
            id="price"
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
            min="0"
            max="1000"
          />
        </div>

        <div class="flex items-center justify-end mt-4">
          <button
            type="submit"
            class="px-4 py-2 text-white bg-blue-500 rounded"
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
        price: 0, // Add price to the product object
      },
      formattedPrice: "", // Add a separate field for formatted price
    };
  },
  async created() {
    await this.fetchProduct();
  },
  watch: {
    "product.price"(newPrice) {
      this.formattedPrice = this.formatCurrency(newPrice);
    },
  },
  methods: {
    async fetchProduct() {
      try {
        const response = await axios.get(
          `http://localhost:3000/products/${this.$route.params.id}`
        );
        this.product = response.data;
        this.formattedPrice = this.formatCurrency(this.product.price);
      } catch (error) {
        console.error("Failed to fetch product:", error);
        alert("Failed to fetch product details. Please try again.");
      }
    },
    async updateProduct() {
      this.product.price = this.removeCurrencyFormatting(this.formattedPrice); // remove formatting before updating
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
    formatPrice() {
      // Format the price as currency (remove decimal)
      const price = this.removeCurrencyFormatting(this.formattedPrice);
      this.product.price = price;
      this.formattedPrice = this.formatCurrency(price);
    },
    formatCurrency(value) {
      return value
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",") // Add commas for thousands
        .replace(/\..*/, ""); // Remove decimals
    },
    removeCurrencyFormatting(value) {
      // Remove commas and return a number
      return parseInt(value.replace(/[^0-9]/g, ""), 10);
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
