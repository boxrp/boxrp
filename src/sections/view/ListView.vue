<template>
    <div>
        <header class="flex flex-col">
            <Header :label="list?.label" :icon="list?.icon" class="px-4" />
            <div class="mx-4 border-b flex items-center">
                <TabBar />
                <Search />
            </div>
            <div class="mx-4 mt-1 flex h-12">
                <SecondaryActions />
                <ActionButtons />
            </div>
        </header>
        <main>
            <component :is="view"></component>
        </main>
    </div>
</template>

<script setup lang="ts">
    import { computed } from "vue";
    import { useRoute } from "vue-router";
    import { $list } from "@store/list";
    import { useStore } from "@nanostores/vue";
    import Header from "./Header.vue";
    import TabBar from "./TabBar.vue";
    import Search from "./Search.vue";
    import ActionButtons from "./ActionButtons.vue";
    import SecondaryActions from "./SecondaryActions.vue";

    import Grid from "./grid/Grid.vue";
    import Board from "./board/Board.vue";

    const list = useStore($list);

    const view = computed(() => {
        switch (route.params.view) {
            case "board":
                return Board;
            default:
                return Grid;
        }
    });

    const route = useRoute();
</script>

<style scoped lang="scss"></style>
