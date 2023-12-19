<template>
    <div class="text-slate-700 flex flex-col gap-1.5 py-2 text-sm">
        <div class="flex gap-1.5 items-center">
            <input type="checkbox" id="date-config-durations" v-model="durations" class="rounded-sm border border-gray-400 focus:ring-0">
            <label for="date-config-durations">Express close dates as durations</label>
            <div class="flex-1 text-right text-slate-400 text-xs">{{ durations ? '2 days ago' : format(subDays(new Date(), 2), 'dd MMM') }}</div>
        </div>
        <div class="flex gap-1.5 items-center">
            <input type="checkbox" id="date-config-dow" v-model="dow" class="rounded-sm border border-gray-400 focus:ring-0">
            <label for="date-config-dow">Include the day of the week</label>
            <div class="flex-1 text-right text-slate-400 text-xs">{{ dow ? format(new Date(), 'EEE dd MMM') : format(new Date(), 'dd MMM') }}</div>
        </div>
        <div class="flex gap-1.5 items-center">
            <input type="checkbox" id="date-config-year" v-model="year" class="rounded-sm border border-gray-400 focus:ring-0">
            <label for="date-config-year">Include the current year</label>
            <div class="flex-1 text-right text-slate-400 text-xs">{{ year ? format(new Date(), 'dd MMM yyyy') : format(new Date(), 'dd MMM') }}</div>
        </div>
        <div class="flex gap-1.5 items-center">
            <input type="checkbox" id="date-config-time" v-model="time" class="rounded-sm border border-gray-400 focus:ring-0">
            <label for="date-config-time">Include time</label>
            <div class="flex-1 text-right text-slate-400 text-xs">{{ time ? format(new Date(), 'dd MMM - HH:mm') : format(new Date(), 'dd MMM') }}</div>
        </div>
        <div class="flex gap-1.5 items-center">
            <input type="checkbox" id="date-config-past" v-model="historic" class="rounded-sm border border-gray-400 focus:ring-0">
            <label for="date-config-past">Allow input of historic dates</label>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from "vue";
    import { FieldType } from "./FieldTypeList.vue";
    import { format, subDays } from "date-fns";

    const durations = ref(true);
    const time = ref(false);
    const dow = ref(true);
    const historic = ref(true);
    const year = ref(false);

    defineProps<{
        field: FieldType;
    }>();

    defineEmits(["select"]);
</script>

