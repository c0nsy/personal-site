// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import getRouter from "./router";

const app = createApp(App);

// Configure and use the router instance
const router = getRouter();
app.use(router);

// Mount the app to the #app element
app.mount("#app");
