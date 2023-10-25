<template>
    <button class="flex gap-1 items-center cursor-pointer px-2 py-1 rounded-md text-slate-500" :class="{'hover:bg-slate-100': !active, 'bg-indigo-100 text-indigo-700': active}">
        <div v-if="icon" class="material-symbols-outlined">{{ icon }}</div>
        <div class="uppercase font-medium text-sm">{{ label }}</div>
    </button>
</template>

<script setup lang="ts">
    defineProps<{
        label: string;
        icon?: string;
        active?: boolean;
    }>();
</script>
