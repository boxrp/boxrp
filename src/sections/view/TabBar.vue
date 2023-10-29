<template>
    <div class="flex-1 flex items-center gap-2 pt-1 text-slate-500">
        <div v-for="{ id, icon } in tabs" class="border-b-4 py-2" :class="{ 'border-white': id !== active, 'border-indigo-500 text-indigo-500': id === active }" @click="changeView(id)">
            <button class="flex gap-1 items-center pl-2 pr-3 py-1 rounded-full cursor-pointer hover:bg-hover">
                <div v-if="icon" class="icon">{{ icon }}</div>
                <div class="capitalize text-sm font-medium">{{ id }}</div>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed } from "vue";
    import { useRouter, useRoute } from "vue-router";

    // defineProps<{
    //     label: string | undefined;
    //     icon: string | undefined;
    // }>();

    const route = useRoute();
    const router = useRouter();
    const tabs = [
        { id: "list", icon: "table_rows" },
        { id: "grid", icon: "calendar_view_month" },
        { id: "board", icon: "view_kanban" },
        { id: "calendar", icon: "calendar_month" },
        { id: "timeline", icon: "view_timeline" },
    ];
    const active = computed(() => route.params.view || "grid");

    function changeView(view: string) {
        const path = `/list/${router.currentRoute.value.params.id}/${view}`;
        router.push(path);
    }
</script>

<!-- , {id: "form", icon: "article"} -->
