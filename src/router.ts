import { createRouter, createWebHistory } from 'vue-router';
import Auth from "@sections/auth/Auth.vue";
import Layout from "@sections/Layout.vue";
import Home from "@sections/home/Home.vue";

import Space from "@sections/space/Space.vue";

import List from "@sections/list/List.vue";

import Folders from "@sections/settings/folders/Folders.vue";

const routes = [
    { path: "/", name: "auth", component: Auth },
    { path: "/", component: Layout, children: [
        { path: "home", name: "home", component: Home },
    ]},

    { path: "/space", component: Layout, children: [
        { path: ":id", name: "space", component: Space }
    ]},

    { path: "/list", component: Layout, children: [
        { path: ":id/:tab", name: "list", component: List }
    ]},

    { path: "/settings", component: Layout, children: [
        { path: "folders", name: "folders", component: Folders },
    ]},


]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export { router };


