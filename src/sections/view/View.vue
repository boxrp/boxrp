<template>
    <header class="h-16 border-b border-border text-black flex items-center p-2">
        <slot name="header"></slot>
    </header>
    <main>
        <slot></slot>
    </main>
</template>

<!-- <script setup lang="ts">
    import Sidebar from "./sidebar/Sidebar.vue";
</script>

<style scoped lang="scss"></style> -->
