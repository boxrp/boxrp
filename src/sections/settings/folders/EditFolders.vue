<template>
    <main class="grid grid-cols-[48px_256px_82px_1fr]">
        <div class="grid-header border-b"></div>
        <div class="grid-header py-2 border-b caption text-sm">Folder</div>
        <div class="grid-header py-2 border-b caption text-sm">Lists</div>
        <div class="grid-header py-2 border-b caption text-sm">Sharing</div>

        <template v-for="folder in store.folders">
            <!-- Folders -->
            <span class="contents text-sm text-slate-600 cursor-default" :class="{ selected: store.edit.selected === folder.id }">
                <div class="icon icon-filled text-2xl cursor-pointer justify-center" @click="store.edit.selected = folder.id">
                    {{ store.edit.selected === folder.id ? "check_box" : "check_box_outline_blank" }}
                </div>
                <li class="flex gap-2 items-center">
                    <div class="flex justify-center">
                        <div class="icon cursor-pointer" @click="chevron(folder.id)">{{ open.has(folder.id) ? "expand_less" : "expand_more" }}</div>
                        <div class="icon">folder</div>
                    </div>
                    <div class="flex-1 text-start truncate font-semibold">{{ folder.label }}</div>
                </li>
                <div class="">{{ folder.lists.length }}</div>
                <div class="">Anyone at g8.co.nz</div>
            </span>
            <!-- Lists -->
            <span v-if="open.has(folder.id)" v-for="view in folder.lists" class="contents text-sm text-slate-800 cursor-default" :class="{ selected: store.edit.selected === view.id }">
                <div class="icon icon-filled text-2xl cursor-pointer justify-center" @click="store.edit.selected = view.id">
                    {{ store.edit.selected === view.id ? "check_box" : "check_box_outline_blank" }}
                </div>
                <li class="flex gap-2 items-center pl-6">
                    <div class="icon">format_list_bulleted</div>
                    <div class="flex-1 text-start truncate">{{ folder.label }}</div>
                </li>
                <div></div>
                <div class="">Same as folder</div>
            </span>
        </template>
    </main>
</template>

<script setup lang="ts">
    import { ref } from "vue";
    import { useFolderStore } from "@store/folder-store";

    const store = useFolderStore();
    const open = ref(new Set<string>());

    function chevron(id: string) {
        if (open.value.has(id)) {
            open.value.delete(id);
        } else {
            open.value.add(id);
        }
    }
</script>

<style scoped lang="scss">
    // Import grid-header
    @import "../../view/shared.scss";

    span:hover > * {
        @apply bg-slate-50;
    }
    span > * {
        @apply h-12 flex items-center;
    }
    .selected > * {
        @apply bg-indigo-100 text-indigo-600 #{!important};
    }
</style>
