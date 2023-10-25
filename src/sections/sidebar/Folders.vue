<template>
    <ul class="py-4 text-slate-500 text-sm font-medium">
        <li v-for="folder in folders" class="flex flex-col justify-center cursor-pointer">
            <Disclosure v-slot="{ open }">
                <DisclosureButton class="hover:bg-slate-100">
                    <NavItem :item="folder" icon="folder">
                        <div class="material-symbols-outlined">{{ open ? "expand_less" : "expand_more" }}</div>
                    </NavItem>
                </DisclosureButton>
                <DisclosurePanel class="text-gray-500">
                    <NavItem v-for="child in folder.views" :item="child" size="small" icon="format_list_bulleted">2</NavItem>
                </DisclosurePanel>
            </Disclosure>
        </li>
    </ul>
</template>

<script setup lang="ts">
    import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
    import NavItem from "./NavItem.vue";
    import { useStore } from '@nanostores/vue'
    import { $folders } from "@store/folder";

    const folders = useStore($folders);
</script>
