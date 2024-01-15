// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

// Define your routes
const routes = [
  { path: "/", redirect: "/home" },
  // Add more routes as needed
];

// Create and configure the router instance
function getRouter() {
  return createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
}

export default getRouter;
