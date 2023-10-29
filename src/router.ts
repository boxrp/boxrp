import { createRouter, createWebHistory } from 'vue-router';
import Auth from "@sections/auth/Auth.vue";
import Layout from "@sections/Layout.vue";
import Home from "@sections/home/Home.vue";
import ListView from "@sections/view/ListView.vue";
import { dispatch } from "@store/subscribe";

const routes = [
    { path: "/", name: "auth", component: Auth },
    { path: "/", component: Layout, children: [
        { path: "home", name: "home", component: Home },
    ]},

    { path: "/list", component: Layout, children: [
        { path: ":id/:view", name: "list", component: ListView },
    ]},
]


const router = createRouter({
    history: createWebHistory(),
    routes
});

// Call listeners when route changes
router.afterEach((to) => {
    dispatch(to.name as string, to.params as Record<string, string>);
});

export { router };
