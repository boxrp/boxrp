<template>
    <div class="flex-1 flex h-full gap-2 pt-1 text-slate-500">
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
    import { Tab } from "@store/list-view-definition";

    defineProps<{
        tabs: Tab[] | undefined;
    }>();

    const route = useRoute();
    const router = useRouter();
    const active = computed(() => route.params.tab || "grid");

    function changeView(view: string) {
        const path = `/list/${router.currentRoute.value.params.id}/${view}`;
        router.push(path);
    }
</script>

<!-- , {id: "form", icon: "article"} -->
