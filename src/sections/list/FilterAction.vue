<template>
    <LeftRight class="h-14">
        <template #left>
            <div class="flex gap-2">
                <Dropdown label="Group" icon="sort" :value="''" :options="{}" />
                <Dropdown label="Filter" icon="filter_list" value="" :options="{}" />
                <Dropdown label="Assigned" icon="person" value="" :options="{}" />
                <Dropdown label="Closed" icon="check_circle" value="" :options="{}" />
            </div>            
        </template>
        <template #right>
            <div class="flex gap-1">
                <Button v-for="{ id, label, icon, flip } in actions.actions" :id="id" :icon="icon" :flip="flip" :type="label ? 'outlined' : 'icon'">{{ label || icon }}</Button>
            </div>
        </template>
    </LeftRight>
</template>

<script setup lang="ts">
    import actions from "./actions.json";
    import LeftRight from "@view/LeftRight.vue";
    import Dropdown from "@components/Dropdown.vue";
    import Button from "@components/Button.vue";
</script>

