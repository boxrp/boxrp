<template>
    <div class="flex-1 flex h-full gap-2 pt-1 text-slate-500">
        <div v-for="{ id, icon } in tabs" class="border-b-4 py-2" :class="{ 'border-white': id !== active, 'border-indigo-500 text-indigo-500': id === active }" @click="$emit('click', id)">
            <button class="flex gap-1 items-center pl-2 pr-3 py-1 rounded-full cursor-pointer hover:bg-hover">
                <div v-if="icon" class="icon">{{ icon }}</div>
                <div class="capitalize text-sm font-medium">{{ id }}</div>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
    export interface Tab {
        id: string;
        icon: string;
    }

    defineProps<{
        tabs: Tab[] | undefined;
        active: string;
    }>();

    defineEmits(["click"]);
</script>
