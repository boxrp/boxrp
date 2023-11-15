<template>
    <div class="h-full overflow-scroll">
        <div class="grid " :style="{ 'grid-template-columns': widths }">
            <header class="grid-header contents caption text-sm cursor-default">
                <div></div>
                <div v-for="field in store.list?.fields">{{ field.label }}</div>
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
        if (selected.value.has(id)) {
            selected.value.delete(id);
        } 
        else {
            selected.value.add(id);
        }
    }    

</script>


<style scoped lang="scss">
    .grid-header {
        @apply font-medium text-slate-800;

        & > * {
            @apply bg-yellow-50 p-2 border-b border-r whitespace-nowrap overflow-hidden overflow-ellipsis text-xs sticky top-0;

            &:last-child {
                @apply border-r-0;
            }
            &:hover {
                @apply bg-slate-50;
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
