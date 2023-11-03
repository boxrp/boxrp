<template>
    <div class="px-4 mt-2 flex gap-4 pt-6">
        <DragGroup class="flex gap-4">
            <section v-for="{ option, items } in store.grouped" class="w-60 flex flex-col gap-4">
                <header class="border border-t-4 caption p-3 rounded-md shadow-sm flex gap-2 mb-2" :style="{ 'border-top-color': option?.color }">
                    <div class="flex-1">{{ option?.value }}</div>
                    <div class="text-xs border rounded-full px-2 flex items-center">{{ items?.length }}</div>
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

    // defineProps<{
    //     list: List;
    // }>();
</script>

<style lang="scss">

    .drag-proxy {
        @apply border-indigo-500;
    }
    .drop-proxy {
        @apply bg-gray-100;
        &>* {
            @apply invisible;
        }
    }

</style>