<template>
    <div>
        <GridHeader :list="store.list" :layout="widths" :border="false" />
        <GridBody :schema="store.schema" :layout="widths" :items="store.items" :border="false" />
    </div>
</template>

<script setup lang="ts">
    import { computed } from "vue";
    import { useListStore } from "@store/list-store";
    import GridHeader from "./GridHeader.vue";
    import GridBody from "./GridBody.vue";
    import { width } from "./widths";

    const store = useListStore();
    const widths = computed(() => "32px " + width(store.list?.fields || []));

    // defineProps<{
    //     list: List;
    // }>();
</script>
