<template>
    <header class="flex items-center w-full">
        <div class="flex items-center">
            <Icon class="text-slate-500">{{ icon || 'format_list_bulleted' }}</Icon>
            <div class="text-xl font-semibold text-slate-800 ml-2 mr-4">{{ label }}</div>
        </div>
        <div class="flex-1 flex items-center justify-end">
            <Button v-for="tab in tabs" :label="tab.id" :icon="tab.icon" :active="tab.id === active" class="mr-1" @click="changeView(tab.id)" />
            <Button label="Settings" icon="settings" class="py-2" :active="active === 'settings'" @click="changeView('settings')" />
        </div>
    </header>
</template>

<script setup lang="ts">
    import { computed } from "vue";
    import Icon from "@components/Icon.vue";
    import Button from "@components/Button.vue";
    import { useRouter, useRoute } from "vue-router";

    defineProps<{
        label: string | undefined;
        icon: string | undefined;
    }>();    

    const route = useRoute();
    const router = useRouter();
    const tabs = [{id: "list", icon: "table_rows"}, {id: "grid", icon: "calendar_view_month"}, {id: "board", icon: "view_kanban"}, {id: "calendar", icon: "calendar_month"}, {id: "time", icon: "view_timeline"}];
    const active = computed(() => route.params.view || "grid");
    
    function changeView(view: string) {
        const path = `/list/${router.currentRoute.value.params.id}/${view}`;
        router.push(path);
    }


</script>

<!-- , {id: "form", icon: "article"} -->
