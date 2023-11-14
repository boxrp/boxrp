<template>
    <li class="">
        <header>
            <div>{{ label }}</div>
        </header>
        <main></main>

        <!-- <div class="rounded-md flex justify-center">
            <div class="icon" :class="{ 'w-6 text-lg text-right': small }">{{ item.icon || icon || "folder" }}</div>
        </div>
        <div class="flex-1 text-start truncate">{{ item.label }}</div>
        <div class="text-xs text-slate-400 w-6 text-center">
            <slot></slot>
        </div> -->
    </li>
</template>

<script setup lang="ts">
    import { NavItem } from "@store/types";

    defineProps<{
        id: string;
        label: string;
        icon?: string;
    }>();
</script>
