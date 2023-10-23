// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: "/",
        name: "AllBreweries",
        component: AllBreweries,
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router