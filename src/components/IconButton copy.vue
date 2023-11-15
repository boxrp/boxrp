<template>
    <div class="icon-button" :class="{'rotate-180': flip}">
        <slot />
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        id: string;
        tooltip?: string;
        flip?: boolean;
    }>();
   
</script>


