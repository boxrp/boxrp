import { createRouter, createWebHistory } from 'vue-router';
import Auth from "@sections/auth/Auth.vue";
import Layout from "@sections/Layout.vue";
import Home from "@sections/home/Home.vue";

import List from "@sections/list/List.vue";

// import FoldersHeader from "@sections/settings/folders/FoldersHeader.vue";
// import EditFolders from "@sections/settings/folders/EditFolders.vue";

const routes = [
    { path: "/", name: "auth", component: Auth },
    { path: "/", component: Layout, children: [
        { path: "home", name: "home", component: Home },
    ]},

    { path: "/list", component: Layout, children: [
        { path: ":id/:tab", name: "list", component: List }
    ]},

]

const router = createRouter({
    history: createWebHistory(),
    routes
});

// Wait until the router is initilised, then setup watches


export { router };


