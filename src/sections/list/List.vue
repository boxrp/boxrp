<template>
    <div class="flex flex-col h-full">
        <ListHeader :definition="definition" />
        <!-- This class must be overflow-auto -->
        <section class="flex-1 overflow-auto">
            <component :is="view" />
        </section>
    </div>
</template>

<script setup lang="ts">
    import { computed, watch } from "vue";
    import { useRoute } from "vue-router";
    import { useListStore } from "@store/list-store";
    import { standardDefinition as definition } from "@store/view-definition";
    import ListHeader from "./ListHeader.vue";
    import Grid from "./grid/Grid.vue";
    import Board from "./board/Board.vue";
    import Calendar from "./calendar/Calendar.vue";
    import Timeline from "./timeline/Timeline.vue";

    const route = useRoute(); 
    const store = useListStore();

    watch(() => route.params.id, (newId, oldId) => {
        if (newId !== oldId) {
            fetchList(newId as string);
        }
    });


    fetchList(route.params.id as string);

    function fetchList(id: string) {
        store.fetchList(id);
        store.fetchListItems(id);
    }

    const view = computed(() => {
        // console.log(route.params.tab);
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


</script>

<style scoped lang="scss"></style>
