<template>
    <nav class="w-64 bg-borp-1 flex flex-col border-r">
        <header class="h-16 flex items-center px-3 border-b bg-white">
            <Logo size="small" />
            <div class="flex justify-end w-full">
                <div class="icon text-slate-400">left_panel_close</div>
            </div>
        </header>
        <!-- Header -->
        <ul class="py-2 text-slate-500 text-sm font-medium border-b">
            <NavItem v-for="item in items.top" :item="item" :active="active === item.id" @click="showList(item.id)">99+</NavItem>
        </ul>
        <div class="flex-1 overflow-y-auto">
            <!-- Spaces -->
            <Spaces :spaces="store.spaces" :active="active" @spaceclick="spaceClick" @listclick="listClick" />
        </div>
        <!-- Footer -->
        <ul class="py-2 text-slate-500 text-sm font-medium border-t">
            <NavItem v-for="item in items.bottom" :item="item" :active="active === item.id" @click="bottomItemClick(item.id)" />
        </ul>
    </nav>
</template>

<script setup lang="ts">
    import { ref } from "vue";
    import { useRouter } from "vue-router";
    import { auth } from "@store/firebase";
    import { useSpaceStore } from "@store/space-store";
    import Logo from "@components/Logo.vue";
    import NavItem from "./NavItem.vue";
    import Spaces from "./Spaces.vue";
    import items from "./items.json";

    const store = useSpaceStore();
    const router = useRouter();
    const active = ref("home");

    function showList(id: string) {
        active.value = id;
        const path = `/list/${id}/grid`;
        router.push(path);
    }

    function spaceClick(id: string) {
        active.value = id;
        const path = `/space/${id}`;
        router.push(path);
    }
    function listClick(id: string) {
        active.value = id;
        const path = `/list/${id}/grid`;
        router.push(path);
    }

    function bottomItemClick(id: string) {
        active.value = id;
        switch (id) {
            case "spaces":
                router.push({ name: "spaces" });
                break;
            case "logout":
                auth.signOut();
                router.push({ name: "auth" });
                break;
        }
    }
</script>

<!-- https://perfectscrollbar.com/ -->
