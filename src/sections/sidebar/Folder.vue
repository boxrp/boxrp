<template>
    <li class="flex flex-col gap-2 justify-center cursor-pointer">
        <Disclosure v-slot="{ open }">
            <DisclosureButton class="hover:bg-slate-100">
                <NavItem :item="item">
                    <div class="material-symbols-outlined">{{ open ? 'expand_less' : 'expand_more' }}</div>
                </NavItem>
            </DisclosureButton>
            <DisclosurePanel class="text-gray-500">
                <NavItem v-for="child in item.children" :item="child" size="small">2</NavItem>
            </DisclosurePanel>
        </Disclosure>
    </li>
</template>

<script setup lang="ts">
    import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
    import NavItem from "./NavItem.vue";
    import { NavItem as NaveItemType } from "@stores/Sidebar";

    defineProps<{
        item: NaveItemType,
    }>()
</script>
