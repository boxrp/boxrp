import { defineStore } from 'pinia'
import { ref } from 'vue';

const useCalendarStore = defineStore('calendar', () => {

    const $month = ref<Date>(new Date());

    return { month: $month }
  });

import { startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek } from 'date-fns';

function daysOfMonth(date: Date) {
    const firstSunday = startOfWeek(startOfMonth(date), { weekStartsOn: 0 });
    const lastSaturday = endOfWeek(endOfMonth(date), { weekStartsOn: 0 });
    return eachDayOfInterval({ start: firstSunday, end: lastSaturday });
};

export { useCalendarStore, daysOfMonth } 