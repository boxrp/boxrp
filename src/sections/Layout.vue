<template>
    <main class="w-screen h-screen flex">
        <Sidebar />
        <section class="flex-1 flex flex-col">
            <header class="h-16 border-b border-border text-black flex items-center p-2">
                <div>Head</div>
            </header>
        </section>
    </main>
</template>

<script setup lang="ts">
    import Sidebar from "./sidebar/Sidebar.vue";
</script>

<style scoped lang="scss"></style>
