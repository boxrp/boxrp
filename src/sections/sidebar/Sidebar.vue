<template>
    <nav class="w-64 bg-zinc-50 flex flex-col border-r">
        <header class="h-16 flex items-center pl-4 border-b">
            <Logo size="small" />
        </header>
        <!-- Header -->
        <ul class="py-4 text-slate-500 text-sm font-medium border-b">
            <NavItem v-for="item in items.top" :item="item" :active="active === item.id" @click="showList(item.id, item.label)">99+</NavItem>
        </ul>
        <div class="flex-1 overflow-y-auto">
            <!-- Folders -->
            <ul class="py-4 text-slate-500 text-sm font-medium">
                <li v-for="folder in folders" class="flex flex-col justify-center cursor-pointer">
                    <Disclosure v-slot="{ open }">
                        <DisclosureButton class="hover:bg-slate-100">
                            <NavItem :item="folder" :active="active === folder.id">
                                <div class="material-symbols-outlined">{{ open ? "expand_less" : "expand_more" }}</div>
                            </NavItem>
                        </DisclosureButton>
                        <DisclosurePanel class="text-gray-500">
                            <NavItem v-for="view in folder.lists" :item="view" :small="true" :active="active === view.id" icon="format_list_bulleted" @click="showList(view.id, view.label, 'grid')"></NavItem>
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
    import { useStore } from '@nanostores/vue'
    import { $folders } from "@store/folder";
    import { getList } from "@store/list";
    import items from "./items.json";

    const folders = useStore($folders);
    const router = useRouter();
    const active = ref("home");

    function showList(id: string, label: string, view?: string) {
        active.value = id;
        const path = view ? `/list/${id}/${view}` : `/list/${id}`;
        router.push(path);
        getList(id, label);
    }

    function onBottomItemClick(id: string) {
        console.log(id);
        auth.signOut();    
        router.push({ name: "auth" });
    }    

</script>

<!-- https://perfectscrollbar.com/ -->