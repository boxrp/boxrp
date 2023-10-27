<template>
    <header class="grid text-sm border-b bg-amber-50 font-medium text-slate-800" :style="{ 'grid-template-columns': columns(fields) }">
        <div v-for="field in fields">{{ field.label }}</div>
    </header>
    <!-- <div>{{ fields }}</div>
    <div>{{ columns(fields) }}</div> -->

</template>

<script setup lang="ts">
    import { Field } from '@store/list';
    import { columns } from './grid'

    defineProps<{
        fields: Field[];
    }>();    


</script>

<style scoped lang="scss">

    header {
        // border-bottom-width: 1px;
        & > div {
            @apply border-r p-2 whitespace-nowrap overflow-hidden overflow-ellipsis;
        }
    }

</style>