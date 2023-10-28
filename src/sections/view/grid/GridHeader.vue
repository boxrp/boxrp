<template>
    <header class="grid text-sm border-b border-t border-l border-darker bg-amber-50 font-medium text-slate-800" :style="{ 'grid-template-columns': layout }">
        <div></div>
        <div v-for="column in columns">{{ column.label }}</div>
    </header>
</template>

<script setup lang="ts">
    import { Column } from './grid'

    defineProps<{
        columns: Column[];
        layout: string;
    }>(); 
    
</script>

<style scoped lang="scss">

    header {
        & > div {
            @apply border-r border-darker p-2 whitespace-nowrap overflow-hidden overflow-ellipsis;
        }
    }

</style>