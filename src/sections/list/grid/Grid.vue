<template>
    <div class="h-full overflow-scroll">
        <div class="grid " :style="{ 'grid-template-columns': widths }">
            <header class="grid-header contents caption text-sm cursor-default font-medium text-slate-800">
                <div class="border-r"></div>
                <div v-for="field in store.list?.fields" class="flex">
                    <mark></mark>
                    <span class="flex-1 py-2 overflow-hidden">{{ field.label }}</span>
                    <div class="icon text-sm flex items-center text-slate-400 w-3">arrow_upward</div>
                    <mark class="border-r"></mark>
                </div>
            </header>
            <template v-for="(item, i) in store.items">
                <GridRow :fields="store.schema?.fields" :item="item" :selected="selected.has(item.id)" :index="i" @select="select" />
                <!-- <GridRow v-for="child in item.children" :fields="schema?.fields" :item="child" :selected="selected" :child="true" /> -->
            </template>
            <footer class="grid-footer contents border-b caption text-sm cursor-default">
                <nav class="bg-yellow-50 flex items-center justify-center text-slate-400">
                    <div class="icon text-xl">add</div>
                </nav>
                <div v-for="_ in store.list?.fields"></div>
            </footer>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, computed } from "vue";
    import { useListStore } from "@store/list-store";
    import GridRow from "./GridRow.vue";
    import { width } from "./widths";

    const store = useListStore();
    const widths = computed(() => "32px " + width(store.list?.fields || []));

    const selected = ref(new Set<string>());

    function select(id: string) {
        selected.value.clear();
        selected.value.add(id);
        // if (selected.value.has(id)) {
        //     selected.value.delete(id);
        // } 
        // else {
        //     selected.value.add(id);
        // }
    }    

</script>


<style scoped lang="scss">
    .grid-header {

        & > div {
            // The cell
            @apply bg-yellow-50 border-b text-xs sticky top-0;

            // &:hover {
            //     @apply bg-slate-50;
            // }
            // The text label
            & > span {
                @apply whitespace-nowrap overflow-hidden overflow-ellipsis mx-1;
            }
            // The drag handles
            & > mark {
                @apply w-1 cursor-col-resize bg-transparent;
            }

            &:nth-child(2) > mark:first-child {
                @apply invisible;
            }
            &:last-child > mark:last-child {
                @apply invisible;
            }
        }
    }
    .grid-footer {
        & > * {
            @apply border-b border-r;
        }
        & > div {
            @apply border-dashed;
        }
        & > div:last-child {
            @apply border-r-0;
        }
    }

</style>
