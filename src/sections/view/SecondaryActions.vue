<template>
    <div class="flex gap-2 py-2">
        <Dropdown label="Group" icon="sort" value="Status" />
        <Dropdown label="Filter" icon="filter_list" value="" />
        <Dropdown label="Assigned" icon="person" value="" />
        <Dropdown label="Closed" icon="check_circle" value="" />
    </div>
</template>

<script setup lang="ts">
    import Dropdown from "@components/Dropdown.vue";
</script>

