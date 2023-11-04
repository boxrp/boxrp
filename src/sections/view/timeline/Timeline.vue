<template>
    <div class="timeline mx-4 mt-2 text-slate-500 border-t border-l bg-slate-50 caption grid">
        <header v-for="week in store.weeks">
            {{ format(week, 'dd MMM') }} - {{ format(add(week, { days: 6 }), 'dd MMM') }}
        </header>
        <div v-for="day in store.days" :class="{'bg-gray-100': [0, 6].includes(getDay(day))}">
            <div>{{ format(day, 'dd') }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import { useTimelineStore } from '@store/timeline-store';
    // import { weeks } from '@store/timeline-store';
    import { format, isToday, getDay, getDate, isPast, add } from 'date-fns'

    const store = useTimelineStore();
    // const dates = computed(() => weeks(new Date()));



</script>

<style scoped lang="scss">
    // Import grid-header
    @import "../shared.scss";

    .timeline {
        grid-template-columns: repeat(63, 32px);

        &>header {
            @apply col-span-7 text-xs text-center font-semibold py-1;
            @apply border-b border-r;
        }
        &>div {
            @apply text-xs text-center font-semibold;
            @apply border-b border-r;
            @apply h-96;
            &>div {
                @apply border-b py-1;
            }
        }
    }

</style>
