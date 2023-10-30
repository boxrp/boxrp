<template>
    <div class="uppercase text-xs font-medium px-2 py-0.5 rounded-md" :style="{'background-color': (color || 'transparent')}">
        <slot></slot>
    </div>                        
</template>

<script setup lang="ts">
    defineProps<{
        color?: string;
    }>();
</script>
