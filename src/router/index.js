import { createRouter, createWebHistory } from 'vue-router'
import guest from "./routes/guest";
import auth from "./routes/auth";

export default createRouter({
  history: createWebHistory(),
  routes: [
    ...guest,
    ...auth,
  ],
});