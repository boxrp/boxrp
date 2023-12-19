<template>
    <div class="flex flex-col">
        <div class="flex gap-2 items-center" @click="state = !state">
            <div class="flex-1">{{ label }}</div>
            <div class="icon">{{ state ? 'expand_less' : 'expand_more' }}</div>
        </div>
        <div v-if="state">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from "vue";

    defineProps<{
        label: string;
        open?: boolean;
    }>();

    const state = ref(open === undefined ? false : open);

</script>
