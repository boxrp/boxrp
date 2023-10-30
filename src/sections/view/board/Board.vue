<template>
    <div class="px-4 mt-2 flex gap-4">
        <BoardColumn v-for="(label, key) in columns.options" :id="key" :label="label" :color="columns.colors?.[key] || ''" :items="groupedItems[key] as ListItem[] || []" />
    </div>
</template>

<script setup lang="ts">
    import { $groupedItems, $currentGroupOptions, ListItem } from "@store/list";
    import { useStore } from "@nanostores/vue";
    import BoardColumn from "./BoardColumn.vue";

    const columns = useStore($currentGroupOptions);
    const groupedItems = useStore($groupedItems);




    // defineProps<{
    //     list: List;
    // }>();
</script>
