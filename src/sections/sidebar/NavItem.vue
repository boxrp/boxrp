<template>
    <li class="py-1 pl-3 pr-2 flex gap-2 items-center cursor-pointer hover:bg-slate-100">
        <div class="rounded-md">
            <Icon :icon="item.icon || ''" />
        </div>
        <div class="flex-1 text-start">{{ item.label }}</div>
        <div class="text-xs text-slate-400 w-6 text-center">
            <slot></slot>
        </div>
    </li>
</template>

<script setup lang="ts">
    import Icon from "@components/Icon.vue";
    import { NavItem } from "@stores/Sidebar";

    defineProps<{
        item: NavItem,
    }>()
</script>
