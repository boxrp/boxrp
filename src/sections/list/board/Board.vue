<template>
    <div class="px-4 flex gap-4">
        <DragGroup class="flex gap-4">
            <section v-for="{ option, items } in store.grouped" class="w-60 flex flex-col gap-4">
                <header class="grid-header border border-t-8 caption px-3 py-2 rounded-md shadow-sm flex gap-2 mb-2" :style="{ 'border-top-color': option?.color }">
                    <div class="flex-1">{{ option?.value }}</div>
                    <div class="text-xs border rounded-full px-2 flex items-center bg-white">{{ items?.length }}</div>
                </header>
                <DragZone class="flex flex-col gap-4 pb-32">
                    <BoardItem v-for="item in items" :item="item" />
                </DragZone>
            </section>
        </DragGroup>
    </div>
</template>

<script setup lang="ts">
    import { useListStore } from "@store/list-store";
    import BoardItem from "./BoardItem.vue";
    import DragGroup from "@components/dnd/DragGroup.vue";
    import DragZone from "@components/dnd/DragZone.vue";

    const store = useListStore();
</script>

<style lang="scss">
    // Import grid-header
    @import "../shared.scss";

    .drag-proxy {
        @apply border-indigo-500;
    }
    .drop-proxy {
        @apply bg-gray-100;
        & > * {
            @apply invisible;
        }
    }
</style>
