<template>
    <header class="h-16 border-b flex items-center w-full px-4">
        <div class="flex items-center">
            <div class="icon text-slate-500">{{ icon }}</div>
            <div class="text-xl font-semibold text-slate-800 ml-2 mr-4">{{ label }}</div>
        </div>
        <div class="flex-1 text-right">
            <slot></slot>
        </div>
    </header>
</template>

<script setup lang="ts">
    defineProps<{
        label: string;
        icon: string;
    }>();
</script>

