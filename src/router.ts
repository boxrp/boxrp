import { createRouter, createWebHistory } from 'vue-router';

import Auth from "@sections/auth/Auth.vue";
import Layout from "@sections/Layout.vue";
import Table from "@sections/table/Table.vue";

const routes = [
    { path: "/", name: "auth", component: Auth },
    { path: "/app", component: Layout, children: [
        { path: "table/:id", name: "table", component: Table }
    ]},
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router