<template>
    <section class="grid text-sm text-slate-800 cursor-default" :class="{'all-border shadow-sm': border}" :style="{ 'grid-template-columns': layout }">
        <span v-for="item in items" class="contents">
            <nav :class="{'border-l': border}">check_box_outline_blank</nav>
            <template v-for="field in schema?.fields">
                <GridField :field="field" :item="item" />
            </template>
        </span>
    </section>
</template>

<script setup lang="ts">
    import { Schema } from "@store/schema";
    import GridField from "./GridField.jsx";

    defineProps<{
        schema: Schema;
        layout: string;
        items: Record<string, any>[];
        border: boolean;
    }>();
</script>

<style scoped lang="scss">
    section {
        & > span:hover > * {
            @apply bg-slate-50;
        }
        & > span > * {
            @apply border-b p-2 flex items-center;
        }
        & > span > nav {
            @apply flex justify-center text-xl text-slate-400 icon cursor-pointer;
        }
    }
    .all-border {
        & > span > div,
        & > span > nav {
            @apply border-r;
        }
    }

</style>
