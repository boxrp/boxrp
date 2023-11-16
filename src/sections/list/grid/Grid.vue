<template>
    <div class="h-full overflow-scroll">
        <div class="grid " :style="{ 'grid-template-columns': widths }">
            <header class="grid-header contents caption text-sm cursor-default font-medium text-slate-800">
                <div class="border-r bg-yellow-50"></div>
                <div v-for="(field, i) in store.list?.fields" class="flex bg-yellow-50">
                    <mark v-if="i !== 0" class="resize-left"></mark>
                    <span>{{ field.label }}</span>
                    <!-- <div class="icon text-sm flex items-center text-slate-400 w-3">arrow_downward</div> -->
                    <mark class="resize-right"></mark>
                </div>
                <div class="flex items-center justify-center border-r bg-yellow-50 hover:bg-hover">
                    <mark class="resize-left"></mark>
                    <div class="icon text-indigo-500 mt-0.5">add</div>
                </div>
                <div></div>
            </header>

            <template v-for="(item, i) in store.items">
                <GridRow :fields="store.schema?.fields" :item="item" :selected="selected.has(item.id)" :index="i" @select="select" />
                <!-- <GridRow v-for="child in item.children" :fields="schema?.fields" :item="child" :selected="selected" :child="true" /> -->
            </template>

            <footer class="grid-footer contents border-b caption text-sm cursor-default">
                <nav class="bg-yellow-50 flex items-center justify-center py-1 hover:bg-hover">
                    <div class="icon text-indigo-500">add</div>
                </nav>
                <div v-for="_ in store.list?.fields"></div>
                <div></div>
                <div></div>
            </footer>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, computed } from "vue";
    import { useListStore } from "@store/list-store";
    import GridRow from "./GridRow.vue";
    // import { width } from "./widths";

    const store = useListStore();


    const widths = computed(() => "32px " + "128px ".repeat(store.list?.fields.length || 0) + "32px 1fr");

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
            @apply border-b text-xs sticky top-0;

            // &:hover {
            //     @apply bg-slate-50;
            // }
            // The text label
            & > span {
                @apply flex-1 whitespace-nowrap overflow-hidden overflow-ellipsis mx-1 px-1 py-2;
            }

        }

        .resize-left, .resize-right {
            @apply bg-transparent w-1 absolute cursor-col-resize;
        }
        .resize-left {
            @apply top-0 bottom-0 left-0;
        }
        .resize-right {
            @apply top-0 bottom-0 right-0 border-r;
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
            @apply border-0;
        }
    }

</style>
