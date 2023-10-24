import { createRouter, createWebHistory } from 'vue-router';

import Auth from "@sections/auth/Auth.vue";
import Layout from "@sections/Layout.vue";
import Table from "@sections/table/Table.vue";
import Dashboard from "@sections/dashboard/Dashboard.vue";

const routes = [
    { path: "/", name: "auth", component: Auth },
    { path: "/app", component: Layout, children: [
        { path: "dashboard/:id", name: "dashboard", component: Dashboard },
        { path: "table/:id", name: "table", component: Table },
    ]},
]

export default createRouter({
    history: createWebHistory(),
    routes
});
