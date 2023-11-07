import { defineStore } from "pinia";
import { ref } from "vue";

const useCalendarStore = defineStore("calendar", () => {
    const $month = ref<Date>(new Date());

    return { month: $month };
});

import { startOfMonth, endOfMonth, eachDayOfInterval, eachWeekOfInterval, startOfWeek, endOfWeek, add, sub } from "date-fns";

//Return an array of Date objects for the days of the month padded to weeks
function daysOfMonth(date: Date) {
    const firstSunday = startOfWeek(startOfMonth(date), { weekStartsOn: 0 });
    const lastSaturday = endOfWeek(endOfMonth(date), { weekStartsOn: 0 });
    return eachDayOfInterval({ start: firstSunday, end: lastSaturday });
}

function weeks(date: Date, past = 4, future = 4) {
    const sunday = startOfWeek(date, { weekStartsOn: 0 });
    const startWeeks = eachWeekOfInterval({ start: sub(sunday, { weeks: past }), end: add(sunday, { weeks: future }) });
    return startWeeks.map((weekSunday) => {
        return {
            start: weekSunday,
            end: add(weekSunday, { days: 6 }),
        };
    });
}

export { useCalendarStore, daysOfMonth, weeks };
