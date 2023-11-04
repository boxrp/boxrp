import { createRouter, createWebHistory } from 'vue-router';
import Auth from "@sections/auth/Auth.vue";
import Layout from "@sections/Layout.vue";
import Home from "@sections/home/Home.vue";

import ViewHeader from "@sections/view/ViewHeader.vue";
import GridContent from "@sections/view/grid/Grid.vue";
import BoardContent from "@sections/view/board/Board.vue";
import CalendarContent from "@sections/view/calendar/Calendar.vue";
import TimelineContent from "@sections/view/timeline/Timeline.vue";

import { useListStore } from "@store/list-store";

const routes = [
    { path: "/", name: "auth", component: Auth },
    { path: "/", component: Layout, children: [
        { path: "home", name: "home", component: Home },
    ]},

    { path: "/list", component: Layout, children: [
        { path: ":id/grid", name: "grid", components: { header: ViewHeader, content: GridContent } },
        { path: ":id/board", name: "board", components: { header: ViewHeader, content: BoardContent } },
        { path: ":id/calendar", name: "calendar", components: { header: ViewHeader, content: CalendarContent } },
        { path: ":id/timeline", name: "timeline", components: { header: ViewHeader, content: TimelineContent } },
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
            case "grid":
            case "board":
            case "calendar":
            case "timeline":                
                listStore.fetchList(to.params.id as string);
                listStore.fetchListItems(to.params.id as string);
                break;
        }
    });
});

export { router };

            // { path: "board", name: "board", component: BoardView },
            // { path: "calendar", name: "calendar", component: CalendarView },
            // { path: "timeline", name: "timeline", component: TimelineView },
