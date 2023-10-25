<template>
    <header class="flex items-center w-full">
        <div class="flex items-center">
            <Icon class="text-slate-500">format_list_bulleted</Icon>
            <div class="text-xl font-semibold text-slate-800 ml-2 mr-4">{{ label }}</div>
            <Button v-for="tab in tabs" :label="tab.id" :icon="tab.icon" :active="tab.id === active" class="mr-1" @click="active = tab.id" />
        </div>
        <div class="flex-1 flex items-center justify-end">
            <Button label="Settings" icon="settings" @click="" />
        </div>
    </header>
</template>

<script setup lang="ts">
    import { ref } from "vue";
    import Icon from "@components/Icon.vue";
    import Button from "@components/Button.vue";

    defineProps<{
        label: string | undefined;
    }>();    

    const tabs = [{id: "grid", icon: "table_rows_narrow"}, {id: "board", icon: "view_kanban"}, {id: "calendar", icon: "calendar_month"}, {id: "timeline", icon: "view_timeline"}];
    const active = ref(tabs[0].id);


</script>

<!-- , {id: "form", icon: "article"} -->
