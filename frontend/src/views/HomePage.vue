<template>
  <div>
    <div class="container py-6 mx-auto">
      <h1 class="text-xl font-bold">Product List</h1>
      <table class="min-w-full mt-4 border-collapse table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2 border">No</th>
            <th class="px-4 py-2 border">Product Image</th>
            <th class="px-4 py-2 border">Name</th>
            <th class="px-4 py-2 border">Stock</th>
            <th class="px-4 py-2 border">Created At</th>
            <th class="px-4 py-2 border">Updated At</th>
            <th class="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="product.id">
            <td class="px-4 py-2 border">{{ index + 1 }}</td>
            <td class="px-4 py-2 border">
              <img
                :src="product.imageUrl"
                alt="Product Image"
                class="object-cover w-[50px] h-[50px]"
              />
            </td>
            <td class="px-4 py-2 border">{{ product.name }}</td>
            <td class="px-4 py-2 border">{{ product.stock }}</td>
            <!-- Display createdAt and updatedAt dates -->
            <td class="px-4 py-2 border">
              {{ formatDate(product.createdAt) }}
            </td>
            <td class="px-4 py-2 border">
              {{ formatDate(product.updatedAt) }}
            </td>
            <td class="px-4 py-2 border">
              <button
                @click="editProduct(product.id)"
                class="px-2 py-1 text-white bg-blue-500 rounded"
              >
                Edit
              </button>
              <button
                @click="deleteProduct(product.id)"
                class="px-2 py-1 text-white bg-red-500 rounded"
              >
                Delete
              </button>
              <router-link
                :to="{ name: 'ProductDetail', params: { id: product.id } }"
                class="px-2 py-1 text-white bg-green-500 rounded"
              >
                View
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Floating Action Button (FAB) -->
    <router-link
      to="/create"
      class="fixed p-4 text-white transition bg-blue-500 rounded-full shadow-lg bottom-4 right-4 hover:bg-blue-600"
    >
      <span class="text-xl">+</span>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
import { formatDate } from "@/utils/formatDate";

export default {
  data() {
    return {
      products: [],
    };
  },

  mounted() {
    this.fetchProducts();
  },
  methods: {
    formatDate,
    async fetchProducts() {
      const response = await axios.get("http://localhost:3000/products");
      this.products = response.data;
    },
    editProduct(id) {
      this.$router.push({ name: "EditProduct", params: { id: String(id) } });
    },
    async deleteProduct(id) {
      await axios.delete(`http://localhost:3000/products/${id}`);
      this.fetchProducts(); // Refresh product list
    },
  },
};
</script>
