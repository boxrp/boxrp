<template>
    <header class="h-16 border-b border-border text-black flex items-center p-2">
        <Header :label="label" :icon="list?.icon" class="px-4" />
    </header>
    <main>
        <component :is="view"></component>
    </main>
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router'
    import { $list, $label, List } from "@store/list";
    import { useStore } from '@nanostores/vue'
    import Header from "./Header.vue";
    import Grid from "./grid/Grid.vue";
    import Board from "./board/Board.vue";
import { computed } from 'vue';

    const list = useStore($list);
    const label = useStore($label);

    const view = computed(() => {
        switch (route.params.view) {
            case 'grid':
                return Grid;
            case 'board':
                return Board;
            default:
                return Grid;
        }
    });

    const route = useRoute();

</script>

<style scoped lang="scss"></style>
