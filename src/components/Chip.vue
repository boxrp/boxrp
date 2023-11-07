<template>
    <div class="uppercase text-xs font-medium px-2 py-0.5 rounded-md" :style="{ 'background-color': color || 'transparent', 'color': invert(color || '#FFFFFF') }">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        color?: string;
    }>();

    // https://stackoverflow.com/questions/35969656/how-can-i-generate-the-opposite-color-according-to-current-color
    function invert(hex: string) {
        hex = hex.slice(1);
        const r = parseInt(hex.slice(0, 2), 16),
            g = parseInt(hex.slice(2, 4), 16),
            b = parseInt(hex.slice(4, 6), 16);
        return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
    }
</script>
