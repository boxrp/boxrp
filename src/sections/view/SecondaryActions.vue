<template>
    <section class="w-full flex">
        <div class="flex gap-2 py-2">
            <Dropdown label="Group" icon="sort" value="Status" />
            <Dropdown label="Filter" icon="filter_list" value="" />
            <Dropdown label="Assigned" icon="person" value="" />
            <Dropdown label="Closed" icon="check_circle" value="" />
        </div>
        <div class="flex-1 flex items-center justify-end">
            <input type="text" placeholder="Search" class="border border-gray-200 text-sm rounded-md px-2 h-8" />
        </div>
    </section>
</template>

<script setup lang="ts">
    import Dropdown from "@components/Dropdown.vue";
</script>

