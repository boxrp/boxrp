import { createRouter, createWebHistory } from 'vue-router';
import Auth from "@sections/auth/Auth.vue";
import Layout from "@sections/Layout.vue";
import Home from "@sections/home/Home.vue";
import ViewLayout from "@sections/view/ViewLayout.vue";

import GridView from "@sections/view/grid/Grid.vue";
import BoardView from "@sections/view/board/Board.vue";
import CalendarView from "@sections/view/calendar/Calendar.vue";

import { useListStore } from "@store/list-store";

const routes = [
    { path: "/", name: "auth", component: Auth },
    { path: "/", component: Layout, children: [
        { path: "home", name: "home", component: Home },
    ]},

    { path: "/list", component: Layout, children: [
        { path: ":id", component: ViewLayout, children: [
            { path: "list", name: "list", component: GridView },
            { path: "board", name: "board", component: BoardView },
            { path: "calendar", name: "calendar", component: CalendarView },
        ]},
    ]},
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

// Wait until the router is initilised, then setup watches
router.isReady().then(() => {
    const listStore = useListStore();
    router.afterEach((to) => {
        switch (to.name) {
            case "list":
            case "board":
            case "calendar":
                listStore.fetchList(to.params.id as string);
                listStore.fetchListItems(to.params.id as string);
                break;
        }
    });
});

export { router };
