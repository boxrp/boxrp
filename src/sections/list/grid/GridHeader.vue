<template>
    <header class="grid-header grid border-b caption text-sm" :class="{ 'all-border': border }" :style="{ 'grid-template-columns': layout }">
        <div style="border-top-width: 0"></div>
        <div v-for="field in list?.fields">{{ field.label }}</div>
    </header>
</template>

<script setup lang="ts">
    import { List } from "@store/types";

    defineProps<{
        list: List | undefined;
        layout: string;
        border: boolean;
    }>();
</script>

<style scoped lang="scss">
    // Import grid-header
    @import "../shared.scss";

    header {
        & > div {
            @apply p-2 whitespace-nowrap overflow-hidden overflow-ellipsis;
        }
    }
    .all-border {
        & > div {
            @apply border-r;
        }
    }
</style>
