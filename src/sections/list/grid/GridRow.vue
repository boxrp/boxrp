<template>
    <span class="contents grid-row" :class="{'selected': selected.has(item.id), 'grid-row-child': child}">
        <nav @click="toggle(item.id)">{{ selected.has(item.id) ? 'check_box' : 'check_box_outline_blank' }}</nav>
        <GridField :field="field" :item="item" v-for="field in fields" />
    </span>
</template>

<script setup lang="ts">
    import { SchemaField } from "@store/schema";
    import { ListItem } from "@store/types";
    import GridField from "./GridField.jsx";

    const props = defineProps<{
        fields: SchemaField[] | undefined;
        item: ListItem;
        selected: Set<string>;
        child?: boolean;    
    }>();

    function toggle(id: string) {
        if (props.selected.has(id)) {
            props.selected.delete(id);
        } 
        else {
            props.selected.add(id);
        }
    }

</script>

<style lang="scss">
    .grid-row:hover > * {
        @apply bg-slate-50;
    }
    .grid-row > * {
        @apply border-b p-2 flex items-center;
    }
    .grid-row > nav {
        @apply icon icon-filled flex justify-center text-2xl text-slate-400 icon cursor-pointer pl-3;
    }
    .grid-row-child .icon {
        @apply text-lg ml-1;
    }
    .selected {
        &:hover > * {
            @apply bg-blue-50;
        }
        & > * {
            @apply bg-blue-50;
        }
        & > nav {
            @apply text-indigo-500;
        }
    }
</style>
