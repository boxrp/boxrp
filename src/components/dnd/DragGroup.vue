<template>
    <div ref="content">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import { dragula } from "./dragula";

    // defineProps<{
    //     columnClass?: string }
    // >()

    const content = ref<HTMLElement | null>(null);

    onMounted(() => {
        if (content.value) {
            const container = content.value;
            const zones = Array.from(container.querySelectorAll(".dragula-zone"));
            dragula(zones);
        }
    });
</script>

<style lang="scss">
    // Dragular classes
    .gu-hide {
        display: none !important;
    }
    .gu-unselectable {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
    }
    // Renamed dragular classes
    .drag-proxy {
        //.gu-mirror
        position: fixed !important;
        margin: 0 !important;
        z-index: 9999 !important;
    }
    .drop-proxy {
    }
</style>
