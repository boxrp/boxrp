<template>
    <span class="contents grid-row" :class="{ 'selected': selected, 'grid-row-child': child }">
        <nav @click="$emit('select', item.id, $event.metaKey)">{{ index + 1 }}</nav>
        <GridField :field="field" :item="item" v-for="field in fields" />
        <div class="border-dashed"></div>
        <div class="border-0"></div>
    </span>
</template>

<script setup lang="ts">
    import { SchemaField } from "@store/schema";
    import { ListItem } from "@store/types";
    import GridField from "./GridField.jsx";

    defineProps<{
        fields: SchemaField[] | undefined;
        item: ListItem;
        index: number;
        selected: boolean;
        selectedCols: Set<string>;
        child?: boolean;
    }>();

    defineEmits(["select"]);
</script>

<style lang="scss">
    .grid-row {
        @apply text-sm;

        & > * {
            @apply border-b border-r p-2 flex items-center bg-transparent;

            &:last-child {
                @apply border-r-0;
            }
        }
        & > nav {
            @apply bg-boxrp-1 text-slate-400 text-xs font-medium flex justify-center cursor-pointer;

            &:hover {
                @apply bg-boxrp-2;
            }
        }
    }

    .selected {
        & > * {
            @apply bg-blue-50;
        }
        & > nav {
            @apply bg-blue-50;
        }
    }
</style>
