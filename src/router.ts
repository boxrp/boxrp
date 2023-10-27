import { createRouter, createWebHistory } from 'vue-router';

import Auth from "@sections/auth/Auth.vue";
import Layout from "@sections/Layout.vue";
import Home from "@sections/view/home/Home.vue";
import ListView from "@sections/view/ListView.vue";

const routes = [
    { path: "/", name: "auth", component: Auth },
    { path: "/home", name: "home", component: Home, },
    { path: "/list", component: Layout, children: [
        { path: ":id/:view", name: "list", component: ListView },
    ]},
]

export default createRouter({
    history: createWebHistory(),
    routes
});
