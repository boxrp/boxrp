<template>
    <!-- <div class="h-full flex flex-col mb-2"> -->
        <header class="flex flex-col">
            <Header :label="store.list?.label" :icon="store.list?.icon" class="px-4" />
            <div class="mx-4 border-b flex items-center">
                <TabBar />
                <Search />
            </div>
            <div class="pl-4 mt-1 flex h-12">
                <SecondaryActions />
                <ActionButtons />
            </div>
        </header>
    <!-- </div> -->
</template>

<script setup lang="ts">
    import { useListStore } from "@store/list-store";
    import Header from "./Header.vue";
    import TabBar from "./TabBar.vue";
    import Search from "./Search.vue";
    import ActionButtons from "./ActionButtons.vue";
    import SecondaryActions from "./SecondaryActions.vue";
    import { ViewDefinition } from "@store/view-definition";

    const store = useListStore();

    defineProps<{
        definition: ViewDefinition;
    }>();

</script>

<style scoped lang="scss"></style>
