<template>
    <header class="h-16 border-b flex items-center w-full">
        <div class="flex items-center">
            <div class="icon text-slate-500">{{ icon || "format_list_bulleted" }}</div>
            <div class="text-xl font-semibold text-slate-600 ml-2 mr-4">{{ label }}</div>
        </div>
        <div class="flex-1 flex gap-1 items-center justify-end">
            <div v-for="action in actions" class="text-button">
                <figure>{{ action.icon }}</figure>{{ action.label }}
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
    import { Action } from "@store/list-view-definition";


    defineProps<{
        label: string | undefined;
        icon: string | undefined;
        actions: Action[] | undefined;
    }>();
</script>
