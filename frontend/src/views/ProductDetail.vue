<template>
  <div class="container max-w-screen-xl py-6 mx-auto">
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <!-- Column 1: Image -->
      <div class="flex justify-center">
        <img
          :src="product.imageUrl"
          alt="Product Image"
          class="object-cover w-[300px] h-[300px] rounded-lg shadow-lg"
        />
      </div>

      <!-- Column 2: Product Details -->
      <div class="flex flex-col justify-start">
        <div class="mb-4">
          <!-- Allow name to break into multiple lines if it is long -->
          <h1 class="text-2xl font-bold break-words">{{ product.name }}</h1>
        </div>

        <div class="mb-4">
          <!-- Align stock to the left -->
          <p class="text-lg font-medium">
            <span class="font-semibold">Stock:</span>
            <span class="text-gray-600">{{ product.stock }}</span>
          </p>
        </div>

        <div class="mb-4">
          <!-- Align createdAt to the left -->
          <p class="text-lg font-medium">
            <span class="font-semibold">Created At:</span>
            <span class="text-gray-600">{{
              formatDate(product.createdAt)
            }}</span>
          </p>
        </div>

        <div class="mb-4">
          <!-- Align updatedAt to the left -->
          <p class="text-lg font-medium">
            <span class="font-semibold">Updated At:</span>
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
import { formatDate } from "@/utils/formatDate"; // Assuming you have a formatDate function

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
