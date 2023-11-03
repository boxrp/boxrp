<template>
    <nav class="w-64 bg-[#f7f8f9] flex flex-col border-r">
        <header class="h-16 flex items-center px-3 border-b bg-white">
            <Logo size="small" />
            <div class="flex justify-end w-full">
                <div class="icon text-slate-400">left_panel_close</div>
            </div>
        </header>
        <!-- Header -->
        <ul class="py-4 text-slate-500 text-sm font-medium border-b">
            <NavItem v-for="item in items.top" :item="item" :active="active === item.id" @click="showList(item.id)">99+</NavItem>
        </ul>
        <div class="flex-1 overflow-y-auto">
            <!-- Folders -->
            <ul class="py-4 text-slate-500 text-sm font-medium">
                <li v-for="folder in store.folders" class="flex flex-col justify-center cursor-pointer">
                    <Disclosure v-slot="{ open }">
                        <DisclosureButton class="hover:bg-slate-100">
                            <NavItem :item="folder" :active="active === folder.id">
                                <div class="material-symbols-outlined">{{ open ? "expand_less" : "expand_more" }}</div>
                            </NavItem>
                        </DisclosureButton>
                        <DisclosurePanel class="text-gray-500">
                            <NavItem v-for="view in folder.lists" :item="view" :small="true" :active="active === view.id" icon="format_list_bulleted" @click="showList(view.id)"></NavItem>
                        </DisclosurePanel>
                    </Disclosure>
                </li>
            </ul>
        </div>
        <!-- Footer -->
        <ul class="py-4 text-slate-500 text-sm font-medium border-t">
            <NavItem v-for="item in items.bottom" :item="item" :active="active === item.id" @click="onBottomItemClick(item.id)" />
        </ul>
    </nav>
</template>

<script setup lang="ts">
    import { ref } from "vue";
    import { useRouter } from "vue-router";
    import { auth } from "@store/firebase";
    import Logo from "@components/Logo.vue";
    import NavItem from "./NavItem.vue";
    import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
    import { fetchList } from "@store/list";
    import items from "./items.json";

    // import { useStore } from "@nanostores/vue";
    // import { $folders } from "@store/folder";
    import { useFolderStore } from "@store/folder-store";

    //const folders = useStore($folders);

    const store = useFolderStore();
    const router = useRouter();
    const active = ref("home");

    function showList(id: string) {
        active.value = id;
        const path = `/list/${id}/list`;
        router.push(path);
        fetchList(id);
    }

    function onBottomItemClick(id: string) {
        console.log(id);
        auth.signOut();
        router.push({ name: "auth" });
    }
</script>

<!-- https://perfectscrollbar.com/ -->
