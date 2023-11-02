<template>
    <header class="grid text-sm border-b border-t font-medium text-slate-800 bg-yellow-50 bg-opacity-50" :class="{'all-border': border}" :style="{ 'grid-template-columns': layout }">
        <div style="border-top-width: 0"></div>
        <div v-for="field in fields">{{ field.label }}</div>
    </header>
</template>

<script setup lang="ts">
    import { Field } from "@store/types";

    defineProps<{
        fields: Field[];
        layout: string;
        border: boolean;
    }>();
</script>

<style scoped lang="scss">
    header {
        &>div {
            @apply p-2 whitespace-nowrap overflow-hidden overflow-ellipsis;
        }
    }
    .all-border {
        &>div {
            @apply border-r;
        }
    }
</style>
./column