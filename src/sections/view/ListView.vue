<template>
    <div>
        <header class="">
            <Header :label="list?.label" :icon="list?.icon" class="px-4" />
            <div class="mx-4 border-b flex">
                <div>
                    <TabBar class="" />
                </div>

                <div class="flex-1 flex gap-1 items-center justify-end pr-4">
                    <div class="icon-button">upgrade</div>
                    <div class="icon-button rotate-180">upgrade</div>
                    <div class="icon-button">delete</div>
                    <div>
                        <div class="py-1 ml-1 button">
                            <figure class="icon">add</figure>
                            Add Job
                        </div>
                    </div>
                </div>

            </div>
        </header>
        <main>
            <component :is="view"></component>
        </main>
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import { useRoute } from 'vue-router'
    import { $list } from "@store/list";
    import { useStore } from '@nanostores/vue'
    import Header from "./Header.vue";
    import TabBar from "./TabBar.vue";
    import Grid from "./grid/Grid.vue";
    import Board from "./board/Board.vue";

    const list = useStore($list);

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
