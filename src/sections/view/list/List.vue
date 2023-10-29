<template>
    <div class="p-4">LIST</div>
</template>

<script setup lang="ts">
    import { computed } from "vue";
    import { $list, List } from "@store/list";
    import { $items } from "@store/list-item";
    import { useStore } from "@nanostores/vue";
    // import GridHeader from "./GridHeader.vue";
    // import GridBody from "./GridBody.vue";
    import { columns } from "./columns";

    const list = useStore($list);
    const items = useStore($items);
    const cols = computed(() => (list.value ? columns(list.value as List) : []));

    // defineProps<{
    //     list: List;
    // }>();
</script>
