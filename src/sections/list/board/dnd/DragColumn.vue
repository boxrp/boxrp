<template>
    <div>
        <slot name="header"></slot>
        <div @dragenter="enter" @dragleave="exit" @drop="drop" @dragover="dragOver" class="border border-red-500">
            <slot></slot>
        </div>
        {{ inout }}
    </div>
</template>

<script setup lang="ts">
    import { ref } from "vue";

    // defineProps<{
    // }>();

    const inout = ref("out");

    // function dragEnter(e: DragEvent) {
    //     const target = e.currentTarget as HTMLElement;
    //     target.style.border = '5px solid red';
    // }

    // function dragLeave(e: DragEvent) {
    //     const target = e.currentTarget as HTMLElement;
    //     target.style.border = '1px solid red';
    // }

    function drop(e: DragEvent) {
        console.log(e);
    }

    // Prevent default to allow drop
    function dragOver(e: DragEvent) {
        e.preventDefault();
    }

    function enter(e: DragEvent) {
        console.log("enter");
        const target = e.currentTarget as HTMLElement;
        target.classList.add("drag");

        inout.value = "in";
        e.stopPropagation();
    }

    function exit(e: DragEvent) {
        console.log("exit");
        inout.value = "out";
        e.stopPropagation();
    }
</script>

<style lang="scss">
    .drag * {
        pointer-events: none;
    }
</style>
