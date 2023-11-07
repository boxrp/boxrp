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
    import { computed } from "vue";
    import { useRoute } from "vue-router";
    import { standardDefinition as definition } from "@store/view-definition";
    import ListHeader from "./ListHeader.vue";
    import Grid from "./grid/Grid.vue";
    import Board from "./board/Board.vue";
    import Calendar from "./calendar/Calendar.vue";
    import Timeline from "./timeline/Timeline.vue";

    const route = useRoute();

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
