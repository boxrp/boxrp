<template>
    <li :id="id" draggable="true" @dragstart="dragStart" @dragend="dragEnd" class="list-none">
        <slot></slot>
    </li>
</template>

<script setup lang="ts">
    const props = defineProps<{
        id: string
        data?: any;
    }>();

    function dragStart(e: DragEvent) {
        //target.style.backgroundColor = 'red';

        if (e.dataTransfer) {
            e.dataTransfer.dropEffect = 'none'
            e.dataTransfer.effectAllowed = 'none'

            e.dataTransfer.setData("application/json", JSON.stringify(props.data));
            // e.dataTransfer.setDragImage(dragger, 0, 0);

        }
        e.stopPropagation();




        //e.currentTarget.style.backgroundColor = 'yellow';
    }

    function dragEnd(e: DragEvent) {
        console.log(e);
        // const target = e.currentTarget as HTMLElement;
        // e.stopPropagation();
        //target.style.backgroundColor = 'transparent';
    }

</script>

<style lang="scss">

</style>