<template>
    <nav class="w-64 bg-zinc-50 flex flex-col border-r">
        <header class="h-16 flex items-center pl-4 border-b">
            <div class="flex items-center gap-2 mb-1">
                <Logo class="w-10" />
                <div class="text-primary text-xl font-medium mb-1">BoxRP</div>
            </div>
        </header>
        <div class="flex-1">
            <ul class="py-4 text-slate-500 text-sm font-medium border-b">
                <NavItem v-for="item in staticNavItems.top" :item="item">99+</NavItem>
            </ul>
            <div>
                <ul class="py-4 text-slate-500 text-sm font-medium">
                    <Folder v-for="item in store.folders" :item="item" />
                </ul>
            </div>
        </div>
        <ul class="py-4 text-slate-500 text-sm font-medium border-t">
            <NavItem v-for="item in staticNavItems.bottom" :item="item" />
        </ul>
    </nav>
</template>

<script setup lang="ts">
    import Logo from "@components/Logo.vue";
    import NavItem from "./NavItem.vue";
    import Folder from "./Folder.vue";
    import { staticNavItems, useSidebarStore } from "@stores/Sidebar";

    const store = useSidebarStore();


</script>
