<template>
    <div>
        <Grid />
    </div>
</template>

<script setup lang="ts">
    import { ref, computed } from "vue";
    import { useListStore } from "@store/list-store";
    import Grid from "../grid/Grid.vue";
    import { width } from "../grid/widths";

    const store = useListStore();
    const widths = computed(() => "32px " + width(store.list?.fields || []));

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
