<template>
    <li class="py-2 pl-3 pr-2 flex gap-2 items-center cursor-pointer" :class="{ 'hover:bg-slate-100': !active, 'bg-indigo-100 text-indigo-700': active }" @click="$emit('click')">
        <div class="rounded-md flex justify-center">
            <div class="icon" :class="{ 'w-6 text-lg text-right': small }">{{ item.icon || icon || "folder" }}</div>
        </div>
        <label class="flex-1 text-start truncate">{{ item.label }}</label>
        <aside class="text-xs text-slate-400 w-6 text-center hover:text-indigo-700" @click.stop="$emit('action')">
            <slot></slot>
        </aside>
    </li>
</template>

<script setup lang="ts">
    import { NavItem } from "@store/types";

    defineProps<{
        item: NavItem;
        small?: boolean;
        active: boolean;
        icon?: string;
    }>();

    const emit = defineEmits(["click", "action"]);
</script>
