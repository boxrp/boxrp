<template>
    <section class="grid border-l border-darker text-sm text-slate-800 shadow-sm" :style="{ 'grid-template-columns': layout }">
        <span v-for="(item, i) in items" class="contents">
            <div>{{ i }}</div>
            <template v-for="{ id, type } in columns">
                <!-- Boolean/Checkbox -->
                <div v-if="type === 'boolean'" class="justify-center material-symbols-outlined" :class="{'text-indigo-500': item[id]}">
                    {{ item[id] ? 'radio_button_checked' : 'radio_button_unchecked' }}
                </div>
                <!-- Assigned -->
                <div v-else-if="type === 'assigned'" class="justify-center text-center">
                    {{ date(item[id]) }}
                </div>
                <!-- Date -->
                <div v-else-if="type === 'start' || type === 'due'" class="justify-center text-center">
                    {{ date(item[id]) }}
                </div>
                <!-- Normal text field -->
                <div v-else :class="{'font-medium': type === 'name'}">
                    {{ item[id] }}
                </div>
            </template>
        </span>
    </section>
</template>

<script setup lang="ts">
    import { Column } from './grid'

    defineProps<{
        columns: Column[];
        layout: string;
        items: Record<string, any>[];
    }>();    

    const year = new Date().getFullYear();
    const withYear: Intl.DateTimeFormatOptions = { weekday: "short", year: "numeric", month: "short", day: "numeric" };    
    const withoutYear: Intl.DateTimeFormatOptions = { weekday: "short", month: "short", day: "numeric" };    

    function date(timestamp: number) {
        const date = new Date(timestamp * 1_000);
        return date.toLocaleString("en-US", date.getFullYear() === year ? withoutYear : withYear);
    }



</script>

<style scoped lang="scss">

    section {
        & > * > div {
            @apply border-r border-b border-darker p-2 flex items-center;
        }
    }

</style>

<!-- 'check_box' : 'check_box_outline_blank' -->
