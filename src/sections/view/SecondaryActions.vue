<template>
    <div class="flex gap-2 py-2 items-center">
        <Dropdown label="Group" icon="sort" :value="''" :options="{}" />
        <Dropdown label="Filter" icon="filter_list" value="" :options="{}" />
        <Dropdown label="Assigned" icon="person" value="" :options="{}" />
        <Dropdown label="Closed" icon="check_circle" value="" :options="{}" />
    </div>
</template>

<script setup lang="ts">
    // import { computed } from "vue";
    import Dropdown from "@components/Dropdown.vue";
    // import { $group, $groupable } from "@store/list";
    // import { useStore } from "@nanostores/vue";

    // const group = useStore($group);
    // const groupable = useStore($groupable);



</script>
