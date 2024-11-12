import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import CreateProduct from "@/views/CreateProduct.vue";
import ProductDetail from "@/views/ProductDetail.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/create", name: "CreateProduct", component: CreateProduct },
  { path: "/product/:id", name: "ProductDetail", component: ProductDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
