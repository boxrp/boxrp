<template>
    <SettingsHeader label="Folders & Lists" icon="folder">
        <div class="flex gap-1 items-center justify-end py-3">
            <div class="icon-button">upgrade</div>
            <div class="icon-button rotate-180">upgrade</div>
            <div class="icon-button">edit_square</div>
            <div class="icon-button">share</div>
            <div class="icon-button">delete</div>

            <button class="button py-1 pl-2 ml-1" :disabled="!store.edit.selected">
                <figure class="icon">add</figure>Add List
            </button>
            <button class="button py-1 pl-2 ml-1 disabled:opacity-50">
                <figure class="icon">add</figure>Add Folder
            </button>
        </div>
    </SettingsHeader>
</template>

<script setup lang="ts">
    import SettingsHeader from "../SettingsHeader.vue";
    import { useFolderStore } from "@store/folder-store";

    const store = useFolderStore();
</script>

