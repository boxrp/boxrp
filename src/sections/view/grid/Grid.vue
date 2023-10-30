<template>
    <div class="px-4 mt-2">
        <GridHeader :columns="cols" :layout="widths" :border="false" />
        <GridBody :columns="cols" :layout="widths" :items="items" :border="false" />
    </div>
</template>

<script setup lang="ts">
    import { computed } from "vue";
    import { $list } from "@store/list";
    import { $items } from "@store/list-item";
    import { useStore } from "@nanostores/vue";
    import GridHeader from "./GridHeader.vue";
    import GridBody from "./GridBody.vue";
    import { columns } from "./column";

    const list = useStore($list);
    const items = useStore($items);
    const cols = computed(() => (list.value ? columns($list.get()!) : []));
    const widths = computed(() => "32px " + cols.value.map((col) => col.width).join(" "));

    // defineProps<{
    //     list: List;
    // }>();
</script>
