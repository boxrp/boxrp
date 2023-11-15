<template>
    <HeaderScroller>
        <template #header>
            <Title :title="store.list?.label" :icon="store.list?.icon" :actions="actions.title" />
            <TabSearch />
            <FilterAction />
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

    import actions from "./actions.json";

    import HeaderScroller from "@view/HeaderScroller.vue";
    import Title from "@view/Title.vue";
    import TabSearch from "./TabSearch.vue";
    import FilterAction from "./FilterAction.vue";


    import { standardDefinition as definition } from "@store/list-view-definition";

    import Grid from "./grid/Grid.vue";
    import Board from "./board/Board.vue";
    import Calendar from "./calendar/Calendar.vue";
    import Timeline from "./timeline/Timeline.vue";

    const store = useListStore();
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

    function tabClick(id: string) {
        console.log(id);
    }

</script>

<style scoped lang="scss"></style>
