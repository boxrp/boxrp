<template>
    <header class="grid-header contents caption text-sm cursor-default font-medium text-slate-800">
        <div></div>
        <div v-for="(field, i) in fields">
            <mark v-if="i !== 0"></mark>
            <span>{{ field.label }}</span>
            <!-- <div class="icon text-sm flex items-center text-slate-400 w-3">arrow_downward</div> -->
        </div>
        <div class="grid-add-col">
            <mark></mark>
            <div class="icon text-indigo-500">add</div>
        </div>
        <div></div>
    </header>
</template>

<script setup lang="ts">
    import { Field } from "@store/types";
    import FieldDropdown from "./FieldDropdown.vue";

    defineProps<{
        fields: Field[] | undefined;
    }>();

</script>


<style scoped lang="scss">
    .grid-header {

        & > div {
            // The cell
            @apply border-b border-r text-xs sticky top-0 select-none bg-yellow-50 flex hover:bg-slate-50;

            // &:hover {
            //     @apply bg-slate-50;
            // }
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
