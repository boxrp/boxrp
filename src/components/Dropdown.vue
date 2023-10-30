<template>
    <Menu as="div" class="relative">
        <div>
            <MenuButton class="text-sm font-medium border rounded-full pl-2 pr-3 py-0.5 flex gap-0.5 items-center" :class="{ 'border-indigo-200 bg-indigo-50 text-indigo-500': value, 'text-slate-500': !value }">
                <div class="icon text-lg flex items-center h-4">{{ icon }}</div>
                <div class="">{{ label }}{{ value ? ": " + options[value] : "" }}</div>
            </MenuButton>
        </div>

        <MenuItems class="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-md ring-1 ring-black/5 focus:outline-none">
            <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                    <button :class="[active ? 'bg-violet-500 text-white' : 'text-gray-900', 'group flex w-full items-center rounded-md px-2 py-2 text-sm']">Edit</button>
                </MenuItem>
            </div>
        </MenuItems>
    </Menu>
</template>

<script setup lang="ts">
    import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

    defineProps<{
        label: string;
        value: string;
        options: Record<string, string>;
        icon?: string;
    }>();

</script>

<!-- <transition enter-active-class="transition duration-100 ease-out"
enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
leave-to-class="transform scale-95 opacity-0">

</transition> -->
