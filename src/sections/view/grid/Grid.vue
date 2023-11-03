<template>
    <div v-if="store.list" class="px-4 mt-2">
        <GridHeader :fields="store.list.fields || []" :layout="widths" :border="false" />
        <GridBody :schema="store.list.schema" :layout="widths" :items="store.items" :border="false" />
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
