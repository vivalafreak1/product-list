<template>
  <header class="text-white bg-blue-500">
    <div
      class="flex items-center justify-between px-4 py-4 mx-auto max-w-screen-2xl"
    >
      <!-- Logo Section -->
      <div class="flex items-center">
        <h1 class="text-2xl font-bold">Product List</h1>
      </div>

      <!-- Navbar (Mobile Friendly) -->
      <nav class="hidden space-x-6 md:flex">
        <router-link to="/" class="text-white hover:text-gray-200"
          >Home</router-link
        >
        <router-link to="/create" class="text-white hover:text-gray-200"
          >Create Product</router-link
        >
      </nav>

      <!-- Mobile Menu Button (Hamburger) -->
      <div class="md:hidden">
        <button @click="toggleMobileMenu" class="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu (hidden by default, toggled by button) -->
    <div v-if="mobileMenuOpen" class="px-4 py-2 bg-blue-600 md:hidden">
      <router-link to="/" class="block py-2 text-white">Home</router-link>
      <router-link to="/create" class="block py-2 text-white"
        >Create Product</router-link
      >
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
  },
};
</script>

<style scoped>
/* Add custom styles for your header if necessary */
</style>
