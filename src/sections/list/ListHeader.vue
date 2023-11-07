<template>
    <header class="flex flex-col">
        <Header :label="store.list?.label" :icon="store.list?.icon" class="px-4" />
        <div class="mx-4 border-b flex items-center h-14">
            <TabBar />
            <Search />
        </div>
        <div class="pl-4 mt-1 flex h-14 items-center border-b">
            <SecondaryActions />
            <ActionButtons />
        </div>
    </header>
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
