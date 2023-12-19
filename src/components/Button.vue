<template>
    <div v-if="type === 'icon'" class="button-icon">
        <slot />
    </div>
    <div v-else class="py-1 pl-2 ml-1" :class="'button-' + type">
        <figure class="icon">{{ icon }}</figure>
        <slot />
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        id?: string;
        type?: "flat" | "icon" | "outlined" | "text";
        icon?: string;
        tooltip?: string;
    }>();
</script>
