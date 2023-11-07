import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { startOfMonth, endOfMonth, eachDayOfInterval, eachWeekOfInterval, startOfWeek, endOfWeek, add, sub } from "date-fns";

// If changed will need to change the grid columns in src/components/Timeline.vue
const WINDOW_WEEKS = 4;

const useTimelineStore = defineStore("timeline", () => {
    const $date = ref<Date>(new Date());

    const $days = computed(() => {
        const sunday = startOfWeek($date.value, { weekStartsOn: 0 });
        return eachDayOfInterval({ start: sub(sunday, { weeks: WINDOW_WEEKS }), end: add(sunday, { weeks: WINDOW_WEEKS, days: 6 }) });
    });
    const $weeks = computed(() => {
        return eachWeekOfInterval({ start: $days.value[0], end: $days.value[$days.value.length - 1] });
    });

    return { date: $date, days: $days, weeks: $weeks };
});

export { useTimelineStore };
