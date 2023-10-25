<template>
    <nav class="w-64 bg-zinc-50 flex flex-col border-r">
        <header class="h-16 flex items-center pl-4 border-b">
            <Logo size="small" />
        </header>
        <div class="flex-1">
            <ul class="py-4 text-slate-500 text-sm font-medium border-b">
                <NavItem v-for="item in items.top" :item="item" icon="folder">99+</NavItem>
            </ul>
            <div>
                <Folders />
            </div>
        </div>
        <ul class="py-4 text-slate-500 text-sm font-medium border-t">
            <NavItem v-for="item in items.bottom" :item="item" icon="folder" />
        </ul>
    </nav>
</template>

<script setup lang="ts">
    import Logo from "@components/Logo.vue";
    import NavItem from "./NavItem.vue";
    import Folders from "./Folders.vue";
    import items from "./items.json";
</script>
