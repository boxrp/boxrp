<template>
    <li :data-id="item['id']" class="border rounded-md shadow-sm p-3 text-sm cursor-pointer list-none hover:bg-slate-50">
        <div>{{ item["name"] }}</div>
    </li>
</template>


<script setup lang="ts">
    import { ListItem } from "@store/types";

    defineProps<{
        item: ListItem;
    }>();
</script>