<template>
    <div class="p-4">
        <GridHeader :columns="cols" :layout="widths" />
        <GridBody :columns="cols" :layout="widths" :items="items" />
    </div>
</template>

<script setup lang="ts">
    import { computed } from "vue";
    import { $list, List } from "@store/list";
    import { $items } from "@store/list-item";
    import { useStore } from '@nanostores/vue'
    import GridHeader from "./GridHeader.vue";
    import GridBody from "./GridBody.vue";
    import { columns } from './grid'

    const list = useStore($list);
    const items = useStore($items);
    const cols = computed(() => list.value ? columns(list.value as List) : []);
    const widths = computed(() => "40px " + cols.value.map(col => col.width).join(' '));



    // defineProps<{
    //     list: List;
    // }>();     


</script>
