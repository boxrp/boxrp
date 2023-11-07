<template>
    <div class="timeline caption grid h-full">
        <header v-for="week in store.weeks">{{ format(week, "dd MMM") }} - {{ format(add(week, { days: 6 }), "dd MMM") }}</header>
        <div v-for="day in store.days" :class="{ 'bg-blue-50': isToday(day), 'bg-gray-100': [0, 6].includes(getDay(day)) && !isToday(day) }">
            <div>{{ format(day, "dd") }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useTimelineStore } from "@store/timeline-store";
    import { format, isToday, getDay, add } from "date-fns";

    const store = useTimelineStore();
</script>

<style scoped lang="scss">
    // Import grid-header
    @import "../shared.scss";

    .timeline {
        grid-template-columns: repeat(63, 32px);
        grid-template-rows: auto 1fr;

        & > header {
            @apply grid-header;
            @apply col-span-7 text-center py-2;
            @apply border-t border-b border-r;
        }
        & > div {
            @apply text-xs text-center font-medium text-slate-500;
            @apply border-b border-r;
            & > div {
                @apply border-b py-1;
            }
        }
    }
</style>
