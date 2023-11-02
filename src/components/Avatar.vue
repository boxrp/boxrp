<template>
    <div class="flex gap-1.5">
        <div class="rounded-full h-8 w-8 bg-cyan-500 flex items-center justify-center text-xs font-semibold" :style="color(initials)">{{
            initials }}
        </div>
        <div>{{ name }}</div>
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';

    const props = defineProps<{
        name: string;
    }>();

    const initials = computed(() => {
        const names = props.name.split(' ');
        const first = names[0];
        const last = names.length > 1 ? names[names.length - 1] : " ";
        return (first[0] + last[0]).trim();
    });

    // Select a stable color from the colors array based on the initials
    const colors = ["#5f55ee", "#4466ff", "#1090e0", "#0f9d9f", "#3db88b", "#008844", "#f8ae00", "#e16b16", "#d33d44", "#ee5e99", "#b660e0", "#aa8d80", "#656f7d", "#87909e"];
    function color(initials: string) {
        let hash = 0;
        for (let i = 0; i < initials.length; i++) {
            hash = initials.charCodeAt(i) + ((hash << 5) - hash);
        }
        const color = colors[hash % colors.length];
        const text = invert(color);
        return `background-color: ${color}; color: ${text}`
    }
    
    // https://stackoverflow.com/questions/35969656/how-can-i-generate-the-opposite-color-according-to-current-color
    function invert(hex: string) {
        hex = hex.slice(1);
        const r = parseInt(hex.slice(0, 2), 16), g = parseInt(hex.slice(2, 4), 16), b = parseInt(hex.slice(4, 6), 16);
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '#000000' : '#FFFFFF';
    }

</script>
