<template>
    <section class="h-16 border-b flex items-center w-full px-4">
        <slot name="title">
            <div class="flex items-center">
                <div class="icon text-slate-500">{{ icon || "format_list_bulleted" }}</div>
                <div class="text-xl font-semibold text-slate-600 ml-2 mr-4">{{ title }}</div>
            </div>
        </slot>
        <slot name="actions">
            <div class="flex-1 flex gap-1 items-center justify-end">
                <Button v-for="{ id, label, icon } in actions" :id="id" type="text" :icon="icon" @click="$emit('action', id)">{{ label }}</Button>
            </div>
        </slot>
    </section>
</template>

<script setup lang="ts">
    import { ActionButton } from "./view-types";
    import Button from "@components/Button.vue";

    defineProps<{
        title?: string;
        icon?: string;
        actions?: ActionButton[];
    }>();

    defineEmits(["action"]);
</script>
