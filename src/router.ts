import { createRouter, createWebHistory } from 'vue-router';

import Auth from "@sections/auth/Auth.vue";
import Layout from "@sections/Layout.vue";
import Home from "@sections/view/home/Home.vue";
import Grid from "@sections/view/grid/Grid.vue";

const routes = [
    { path: "/", name: "auth", component: Auth },
    { path: "/home", name: "home", component: Home, },
    { path: "/list", component: Layout, children: [
        { path: ":id/grid", name: "grid", component: Grid, meta: { view: "grid" } },
        { path: ":id/board", name: "board", component: Grid, meta: { view: "board" } },
        { path: ":id/calendar", name: "calendar", component: Grid, meta: { view: "calendar" } },
        { path: ":id/timeline", name: "timeline", component: Grid, meta: { view: "timeline" } },
        { path: ":id/settings", name: "settings", component: Grid, meta: { view: "settings" } },
    ]},
]

export default createRouter({
    history: createWebHistory(),
    routes
});
