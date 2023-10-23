<template>
    <div class="material-symbols-outlined leading-8 px-1">{{ icon }}</div>
</template>

<script setup lang="ts">
    defineProps<{
        icon: string
    }>()
</script>
