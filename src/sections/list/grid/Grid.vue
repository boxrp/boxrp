<template>
    <div class="h-full overflow-scroll">
        <div class="grid" :style="{ 'grid-template-columns': widths }">
            <GridHeader :fields="store.list?.fields" :selected-cols="selectedCols" @select="selectCol" />

            <template v-for="(item, i) in store.items">
                <GridRow :fields="store.schema?.fields" :item="item" :selected="selectedRows.has(item.id)" :selected-cols="selectedCols" :index="i" @select="selectRow" />
                <!-- <GridRow v-for="child in item.children" :fields="schema?.fields" :item="child" :selected="selected" :child="true" /> -->
            </template>

            <footer class="grid-footer contents border-b caption text-sm cursor-default">
                <nav class="bg-boxrp-50 flex items-center justify-center py-1 hover:bg-hover">
                    <div class="icon text-indigo-500">add</div>
                </nav>
                <div v-for="_ in store.list?.fields"></div>
                <div></div>
                <div></div>
            </footer>
        </div>
        <SchemaDialog :open="uiStore.schemaDialog" />
    </div>
</template>

<script setup lang="ts">
    import { ref, computed } from "vue";
    import { useListStore } from "@store/list-store";
    import { useListUiStore } from "@store/list-ui-store";
    import GridHeader from "./GridHeader.vue";
    import GridRow from "./GridRow.vue";
    import SchemaDialog from "./schema/SchemaDialog.vue";

    const store = useListStore();
    const uiStore = useListUiStore();

    const widths = computed(() => "32px " + "128px ".repeat(store.list?.fields.length || 0) + "40px 1fr");

    const selectedRows = ref(new Set<string>());
    const selectedCols = ref(new Set<string>());

    function selectRow(id: string, metaKey: boolean) {
        selectedCols.value.clear();
        toggle(id, metaKey, selectedRows.value);
    }

    function selectCol(id: string, metaKey: boolean) {
        selectedRows.value.clear();
        toggle(id, metaKey, selectedCols.value);
    }

    function toggle(id: string, metaKey: boolean, set: Set<string>) {
        if (metaKey) {
            // Ctrl/Cmd
            if (set.has(id)) {
                set.delete(id);
            } else {
                set.add(id);
            }
        } else {
            set.clear();
            set.add(id);
        }
    }
</script>

<style scoped lang="scss">
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
