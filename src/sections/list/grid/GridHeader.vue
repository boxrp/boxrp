<template>
    <header class="grid-header contents cursor-default font-medium text-slate-800 fixed">
        <div></div>
        <div v-for="(field, i) in fields" class="group hover:bg-slate-50" :class="{ 'bg-blue-50': selectedCols.has(field.id) }" @click="$emit('select', field.id, $event.metaKey)">
            <mark v-if="i !== 0"></mark>
            <span class="caption text-xs">{{ field.label }}</span>
            <div class="icon text-lg items-center text-slate-400 w-3 mr-2 hidden hover:text-indigo-700 group-hover:flex">arrow_downward</div>
        </div>
        <FieldDropdown class="grid-add-col">
            <mark></mark>
            <div class="icon text-indigo-500">add</div>
        </FieldDropdown>
        <div></div>
    </header>
</template>

<script setup lang="ts">
    import { Field } from "@store/types";
    import FieldDropdown from "./schema/FieldDropdown.vue";

    defineProps<{
        fields: Field[] | undefined;
        selectedCols: Set<string>;
    }>();
    defineEmits(["select"]);
</script>

<style lang="scss">
    .grid-header {
        & > div {
            // The cell
            @apply border-b border-r sticky top-0 select-none bg-yellow-50 flex py-1;
            // The text label
            & > span {
                @apply flex-1 whitespace-nowrap overflow-hidden overflow-ellipsis mx-1 px-1 py-2;
            }
        }

        mark {
            @apply bg-transparent absolute left-[-4px] w-[9px] h-8 cursor-col-resize;
        }

        .grid-add-col {
            @apply items-center justify-center hover:bg-hover;
        }
    }
</style>
