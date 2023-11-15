<template>
    <article class="flex flex-col h-full">
        <header>
            <slot name="header"></slot>
        </header>
        <main class="flex-1 overflow-auto">
            <slot name="scroller"></slot>
        </main>
    </article>
</template>

<script setup lang="ts">
</script>