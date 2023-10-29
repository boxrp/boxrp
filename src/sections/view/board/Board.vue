<template>BOARD</template>

<script setup lang="ts">
    import { $list, List } from "@store/list";
    import { useStore } from "@nanostores/vue";

    const list = useStore($list);

    // defineProps<{
    //     list: List;
    // }>();
</script>
