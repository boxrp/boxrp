<template>
    <li class="py-2 pl-3 pr-2 flex gap-2 items-center cursor-pointer hover:bg-slate-100">
        <div class="rounded-md flex justify-center">
            <Icon :class="{ 'w-6 text-base text-right': size === 'small' }">{{ item.icon || icon }}</Icon>
        </div>
        <div class="flex-1 text-start truncate">{{ item.label }}</div>
        <div class="text-xs text-slate-400 w-6 text-center">
            <slot></slot>
        </div>
    </li>
</template>

<script setup lang="ts">
    import Icon from "@components/Icon.vue";
    import { NavItem } from "@store/types";

    defineProps<{
        item: NavItem;
        size?: "small";
        icon: string;
    }>();
</script>
@stores/sidebar
