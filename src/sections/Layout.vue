<template>
    <main class="w-screen h-screen flex">
        <Sidebar />
        <section class="flex-1 flex flex-col">
            <router-view />
        </section>
    </main>
</template>

<script setup lang="ts">
    import Sidebar from "./sidebar/Sidebar.vue";
</script>
