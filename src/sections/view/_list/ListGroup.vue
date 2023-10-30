<template>
    <section>
        <!-- Group label -->
        <div class="inline-block px-2 py-1 rounded-md caption mb-4 mt-8" :style="{'background-color': color}">{{ label }}</div>

        <div class="grid text-sm text-slate-400 font-medium" :style="{ 'grid-template-columns': layout }">
            <div v-for="column in columns">{{ column.label }}</div>
        </div>    
    </section>
</template>

<script setup lang="ts">
    import { Column } from "./columns";

    defineProps<{
        groupKey: string
        label: string
        color: string | undefined;
        columns: Column[];
        layout: string;
    }>();
</script>

<style scoped lang="scss">
    header {
        & > div {
            @apply border-r p-2 whitespace-nowrap overflow-hidden overflow-ellipsis;
        }
    }
</style>
