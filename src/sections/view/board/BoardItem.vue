<template>
    <li :id="item['id']" class="border rounded-md shadow-sm p-3 text-sm cursor-pointer list-none hover:bg-slate-50">
        <div>{{ item["A"] }}</div>
    </li>
</template>


<script setup lang="ts">
    import { ListItem } from "@store/list";

    defineProps<{
        item: ListItem;
    }>();
</script>