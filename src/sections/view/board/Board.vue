<template>
    <div class="px-4 mt-2 flex gap-4">

        <div v-for="(label, key) in columns.options" class="w-60 flex flex-col gap-4">
            <header class="border border-t-4 caption p-3 rounded-md shadow-sm flex gap-2 mb-2"
                :style="{ 'border-top-color': columns.colors?.[key] }">
                <div class="flex-1">{{ label }}</div>
                <div class="text-xs border rounded-full px-2 flex items-center">{{ items.length }}</div>
            </header>
            <ul class="board-container flex flex-col gap-4    h-96">
                <BoardItem v-for="item in items[key]" :item="item" />
            </ul>
        </div>

    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import { $groupedItems, $currentGroupOptions, ListItem } from "@store/list";
    import { useStore } from "@nanostores/vue";
    import BoardItem from "./BoardItem.vue";
    import dragula from "dragula";

    const columns = useStore($currentGroupOptions);
    const items = useStore($groupedItems);

    onMounted(() => {
        const ul = Array.from(document.querySelectorAll('.board-container'));
        const d = dragula(ul);
    });

    // defineProps<{
    //     list: List;
    // }>();
</script>

<style lang="scss">
    .gu-mirror {
        position: fixed !important;
        margin: 0 !important;
        z-index: 9999 !important;

        @apply border-indigo-500;

        /* opacity: 0.8;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
        filter: alpha(opacity=80); */
    }
    .gu-hide {
        display: none !important;
    }
    .gu-unselectable {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
    }
    .gu-transit {
        /* opacity: 0.2;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)";
        filter: alpha(opacity=20); */
        @apply bg-gray-100;

        &>* {
            @apply invisible;
        }
    }



</style>