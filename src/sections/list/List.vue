<template>
    <HeaderScroller>
        <template #header>
            <Title :title="store.list?.label" :icon="store.list?.icon" :actions="actions.title" @action="titleAction" />
            <TabAction @action="viewAction" />
        </template>
        <template #scroller>
            <component :is="view" />
        </template>
    </HeaderScroller>
</template>

<script setup lang="ts">
    import { computed } from "vue";
    import { useRoute } from "vue-router";
    import { useListStore } from "@store/list-store";
    import { useListUiStore } from "@store/list-ui-store";

    import actions from "./actions.json";

    import HeaderScroller from "@view/HeaderScroller.vue";
    import Title from "@view/Title.vue";
    import TabAction from "./TabAction.vue";

    // import { standardDefinition as definition } from "@store/list-view-definition";

    import Grid from "./grid/Grid.vue";
    import Board from "./board/Board.vue";
    import Calendar from "./calendar/Calendar.vue";
    import Timeline from "./timeline/Timeline.vue";

    const store = useListStore();
    const uiStore = useListUiStore();
    const route = useRoute();

    const view = computed(() => {
        switch (route.params.tab) {
            case "board":
                return Board;
            case "calendar":
                return Calendar;
            case "timeline":
                return Timeline;
            default:
                return Grid;
        }
    });

    function titleAction(id: string) {
        console.log(id);
    }
    function viewAction(action: string) {
        uiStore.action(action);
    }


</script>

