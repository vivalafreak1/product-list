<template>
  <div class="container py-6 mx-auto">
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <!-- Column 1: Image -->
      <div>
        <img
          :src="product.imageUrl"
          alt="Product Image"
          class="object-cover w-full h-64 rounded-lg shadow-lg"
        />
      </div>

      <!-- Column 2: Product Details -->
      <div>
        <div class="mb-4">
          <h1 class="mb-6 text-2xl font-bold">{{ product.name }}</h1>
        </div>
        <div class="mb-4">
          <p class="text-lg font-medium">
            Stock: <span class="text-gray-600">{{ product.stock }}</span>
          </p>
        </div>

        <div class="mb-4">
          <p class="text-lg font-medium">
            Created At:
            <span class="text-gray-600">{{
              formatDate(product.createdAt)
            }}</span>
          </p>
        </div>

        <div class="mb-4">
          <p class="text-lg font-medium">
            Updated At:
            <span class="text-gray-600">{{
              formatDate(product.updatedAt)
            }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { formatDate } from "@/utils/formatDate"; // Assuming you have a formatDate component

export default {
  data() {
    return {
      product: {},
    };
  },

  methods: {
    formatDate,
  },
  async mounted() {
    const response = await axios.get(
      `http://localhost:3000/products/${this.$route.params.id}`
    );
    this.product = response.data;
  },
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
