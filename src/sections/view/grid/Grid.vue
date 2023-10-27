<template>
    <GridHeader :fields="(list as List)?.schema || []" />
    GRID
</template>

<script setup lang="ts">
    import { $list, List } from "@store/list";
    import { useStore } from '@nanostores/vue'
    import GridHeader from "./GridHeader.vue";

    const list = useStore($list);


    // defineProps<{
    //     list: List;
    // }>();     


</script>
