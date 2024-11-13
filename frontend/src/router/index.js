import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import CreateProduct from "@/views/CreateProduct.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import EditProduct from "@/views/EditProduct.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/create", name: "CreateProduct", component: CreateProduct },
  { path: "/product/:id", name: "ProductDetail", component: ProductDetail },
  { path: "/edit/:id", name: "EditProduct", component: EditProduct },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
