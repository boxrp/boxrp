<template>
    <header class="grid text-sm border-b border-t font-medium text-slate-800 bg-yellow-50 bg-opacity-50" :class="{'all-border': border}" :style="{ 'grid-template-columns': layout }">
        <div style="border-top-width: 0"></div>
        <div v-for="column in columns">{{ column.label }}</div>
    </header>
</template>

<script setup lang="ts">
    import { Column } from "./column";

    defineProps<{
        columns: Column[];
        layout: string;
        border: boolean;
    }>();
</script>

<style scoped lang="scss">
    header {
        &>div {
            @apply p-2 whitespace-nowrap overflow-hidden overflow-ellipsis;
        }
    }
    .all-border {
        &>div {
            @apply border-r;
        }
    }
</style>
./column