<template>
    <div v-if="list" class="px-4 mt-2">
        <GridHeader :fields="list.fields as Field[]" :layout="widths" :border="false" />
        <GridBody :schema="list.schema as Schema" :layout="widths" :items="(items as Record<string, string>[])" :border="false" />
    </div>
</template>

<script setup lang="ts">
    import { computed } from "vue";
    import { Field } from "@store/types";
    import { Schema } from "@store/schema";
    import { $list, $items } from "@store/list";
    import { useStore } from "@nanostores/vue";
    import GridHeader from "./GridHeader.vue";
    import GridBody from "./GridBody.vue";
    import { width } from "./widths";

    const list = useStore($list);
    const items = useStore($items);

    const widths = computed(() => "32px " + width(list.value?.fields as Field[] || []));

    // defineProps<{
    //     list: List;
    // }>();
</script>
