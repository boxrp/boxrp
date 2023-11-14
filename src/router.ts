import { createRouter, createWebHistory } from 'vue-router';
import Auth from "@sections/auth/Auth.vue";
import Layout from "@sections/Layout.vue";
import Home from "@sections/home/Home.vue";

import List from "@sections/list/List.vue";

import Folders from "@sections/settings/folders/Folders.vue";
import Spaces from "@sections/settings/spaces/Spaces.vue";

const routes = [
    { path: "/", name: "auth", component: Auth },
    { path: "/", component: Layout, children: [
        { path: "home", name: "home", component: Home },
    ]},

    { path: "/list", component: Layout, children: [
        { path: ":id/:tab", name: "list", component: List }
    ]},

    { path: "/settings", component: Layout, children: [
        { path: "folders", name: "folders", component: Folders },
        { path: "spaces", name: "spaces", component: Spaces }
    ]},


]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export { router };


