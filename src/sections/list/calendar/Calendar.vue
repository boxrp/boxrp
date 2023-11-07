<template>
    <div class="grid grid-cols-7 border-t h-full grid-rows-[auto_1fr_1fr_1fr_1fr_1fr]">
        <div v-for="day in days" class="grid-header border-r border-b p-2 caption text-center">
            {{ day }}
        </div>
        <div v-for="date in dates" class="border-r border-b text-slate-500 p-2" :class="{ 'bg-blue-50 bg-opacity-100': isToday(date), 'bg-slate-50 bg-opacity-50': [0, 6].includes(getDay(date)) || isPast(date) }">
            <div class="caption text-xs text-right" :class="{ 'text-indigo-500 font-bold': isToday(date) }">
                {{ format(date, getDate(date) === 1 ? "dd MMMM" : "dd") }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed } from "vue";
    import { useCalendarStore, daysOfMonth } from "@store/calendar-store";
    import { format, isToday, getDay, getDate, isPast } from "date-fns";

    const store = useCalendarStore();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dates = computed(() => daysOfMonth(store.month));
</script>

<style scoped lang="scss">
    // Import grid-header
    @import "../shared.scss";
</style>
