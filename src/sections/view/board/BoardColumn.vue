<template>
    <div class="w-60 flex flex-col gap-4">
        <header class="border border-t-4 caption p-3 rounded-md shadow-sm flex gap-2 mb-2" :style="{'border-top-color': color}">
            <div class="flex-1">{{ label }}</div>
            <div class="text-xs border rounded-full px-2 flex items-center">{{ items.length }}</div>
        </header>
        <div v-for="item in items" class="border rounded-md shadow-sm p-3 text-sm cursor-pointer hover:bg-slate-50">
            {{ item["A"] }}
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ListItem } from "@store/list";

    defineProps<{
        id: string;
        label: string;
        color: string;
        items: ListItem[];
    }>();
</script>

<style scoped lang="scss">

</style>
