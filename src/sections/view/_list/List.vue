<template>
    <div class="p-4">
        <ListGroup v-for="(value, key) in currentGroupOptions.options" :group-key="key" :label="value" :color="currentGroupOptions.colors?.[key]" :columns="cols" :layout="widths" />
    </div>
</template>

<script setup lang="ts">
    import { computed } from "vue";
    import { $list, $groups, $currentGroupOptions } from "@store/list";
    import { List } from "@store/types";
    import { $items } from "@store/list-item";
    import { useStore } from "@nanostores/vue";
    import ListGroup from "./ListGroup.vue";
    import { columns } from "./columns";

    const list = useStore($list);
    const items = useStore($items);
    const groups = useStore($groups);
    const currentGroupOptions = useStore($currentGroupOptions);
    const cols = computed(() => (list.value ? columns(list.value as List) : []));
    const widths = computed(() => cols.value.map((col) => col.width).join(" "));

    // defineProps<{
    //     list: List;
    // }>();
</script>
