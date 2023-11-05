<template>
    <header class="h-16 border-b flex items-center w-full">
        <div class="flex items-center">
            <div class="icon text-slate-500">{{ icon || "format_list_bulleted" }}</div>
            <div class="text-xl font-semibold text-slate-800 ml-2 mr-4">{{ label }}</div>
        </div>
        <div class="flex-1 flex gap-1 items-center justify-end">
            <div class="text-button">
                <figure>share</figure>
                Share
            </div>
            <div class="text-button">
                <figure>exit_to_app</figure>
                Export
            </div>
            <div class="text-button">
                <figure>settings</figure>
                Customise
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
    defineProps<{
        label: string | undefined;
        icon: string | undefined;
    }>();
</script>

