<template>
    <section class="grid text-sm text-slate-700 cursor-default" :style="{ 'grid-template-columns': layout }">
        <template v-for="item in items">
            <GridRow :fields="schema?.fields" :item="item" :selected="selected" />
            <GridRow v-for="child in item.children" :fields="schema?.fields" :item="child" :selected="selected" :child="true" />
        </template>
    </section>
</template>

<script setup lang="ts">
    import { ListItem } from "@store/types";
    import { Schema } from "@store/schema";
    import GridRow from "./GridRow.vue";
    import { ref } from "vue";

    defineProps<{
        schema: Schema | undefined;
        layout: string;
        items: ListItem[];
    }>();

    const selected = ref(new Set<string>());

</script>

<style scoped lang="scss">

</style>
