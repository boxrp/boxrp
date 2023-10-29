<template>
    <section class="grid border-l border-darker text-sm text-slate-800 shadow-sm cursor-default" :style="{ 'grid-template-columns': layout }">
        <span v-for="(item, i) in items" class="contents">
            <nav>{{ i }}</nav>
            <template v-for="column in columns">
                <GridField :column="column" :item="item" />
            </template>
        </span>
    </section>
</template>

<script setup lang="ts">
    import { Column } from "./grid";
    import GridField from "./GridField.jsx";

    defineProps<{
        columns: Column[];
        layout: string;
        items: Record<string, any>[];
    }>();
</script>

<style scoped lang="scss">
    section {
        & > span:hover > div {
            @apply bg-hover;
        }
        & > span > div,
        & > span > nav {
            @apply border-r border-b border-darker p-2 flex items-center;
        }
        & > span > nav {
            @apply bg-zinc-50 flex justify-center text-xs text-slate-400;
        }
    }
</style>
