<template>
    <div class="h-full overflow-scroll">
        <div class="grid" :style="{ 'grid-template-columns': widths }">
            <GridHeader :fields="store.list?.fields" />

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
    import GridHeader from "./GridHeader.vue";
    import GridRow from "./GridRow.vue";
    // import { width } from "./widths";

    const store = useListStore();


    const widths = computed(() => "32px " + "128px ".repeat(store.list?.fields.length || 0) + "40px 1fr");

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
