<template>
    <main class="w-screen h-screen flex">
        <Nav />
        <section class="flex-1 flex flex-col">
            <header class="h-16 border-b border-zinc-200 text-black flex items-center p-2">
                <div>Head</div>
            </header>
        </section>
    </main>
</template>

<script setup lang="ts">
    import Nav from "./nav/Nav.vue";
</script>

<style scoped lang="scss">

</style>
