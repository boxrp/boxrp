<template>
    <Dialog title="Fast Fields" :open="open" class="w-[64rem] h-[48rem] flex flex-col gap-3">
        <header class="flex items-center gap-1 text-slate-700">
            <div class="icon text-3xl">bolt</div>                       
            <div class="text-2xl font-medium">Fast Fields</div>
        </header>
        <section class="flex-1 flex gap-2 overflow-hidden">
            <div class="flex-1 border overflow-y-scroll rounded-l-md">
                <div class="schema-grid flex-1 grid grid-cols-[2rem_1fr_1fr]">
                    <header class="contents cursor-default font-medium text-slate-800 fixed">
                        <div class="border-r"></div>
                        <div class="border-r">Field</div>
                        <div>Type</div>
                    </header>
                    <template v-for="(field, i) in store.schema?.fields">
                        <nav>{{ i + 1 }}</nav>
                        <div class="border-r">{{ field.label }}</div>
                        <div></div>
                    </template>
                </div>
            </div>
            <div class="w-96 border rounded-r-md py-2 px-4">
                <FieldConfig />
            </div>
        </section>
        <footer class="flex">
            <div class="flex-1 flex gap-1">
                <Button type="text" @click="" icon="add">Add New</Button>
                <Button type="text" @click="" icon="delete">Remove</Button>
            </div>
            <div class="flex-1 flex justify-end gap-1">
                <Button type="text" @click="close">Cancel</Button>
                <Button type="flat">Save</Button>
            </div>
        </footer>
    </Dialog>
</template>
  
<script setup lang="ts">
    import Dialog from "@components/Dialog.vue";
    import Button from "@components/Button.vue";
    import FieldConfig from "./FieldConfig.vue";
    import { useSchemaStore } from "@store/schema-store"

    defineProps<{
        open: boolean;
    }>();    

    const store = useSchemaStore();

    function close() {
    }

</script>

<style lang="scss">
    .schema-grid {
        & > header > div {
            // The cell
            @apply caption text-xs border-b sticky top-0 select-none bg-boxrp-1 flex px-2 py-3;
        }
        & > * {
            @apply text-sm px-2 py-3 border-b;
        }
        & > nav {
            @apply bg-boxrp-1 text-slate-400 text-xs font-medium flex justify-center items-center cursor-pointer border-r;

            &:hover {
                @apply bg-boxrp-2;
            }
        }        
    }
</style>
