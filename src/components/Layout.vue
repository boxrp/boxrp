<template>
    <main class="w-screen h-screen flex flex-col">
        <Header />
        <section class="flex-1 flex border border-green-500">
            <nav class="w-56 bg-zinc-100">NAV</nav>
            <article class="flex-1 text-black border border-orange-500">BODY</article>
        </section>
    </main>
</template>

<script setup lang="ts">
    import Header from "@components/Header.vue";
</script>

<style scoped lang="scss">
    // header {
    //     background-color: #333;
    //     color: #fff;
    //     padding: 1rem;
    // }
</style>
