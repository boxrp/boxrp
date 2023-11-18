<template>
    <div class="flex flex-col border text-sm overflow-y-auto rounded-md transition-all" :class="{ 'h-10': selected, 'h-96': !selected }">
        <div v-if="selected" class="flex gap-2 items-center px-2 py-1.5 text-slate-500" @click="select()">
            <div class="icon">{{ selected.icon }}</div>
            <div class="font-medium flex-1">{{ selected.name }}</div>
            <div class="icon">expand_more</div>
        </div>
        <div v-else v-for="(group, key) in fields">
            <div class="caption my-1 mx-2 text-xs">{{ key }}</div>
            <div v-for="field in group" class="flex gap-2 items-center px-2 py-1.5 text-slate-500 hover:bg-hover" @click="select(field)">
                <div class="icon">{{ field.icon }}</div>
                <div class="flex-1">
                    <div class="font-medium">{{ field.name }}</div>
                    <div class="text-xs font-normal text-slate-400">{{ field.desc }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from "vue";
    import fields from "./fields.json";

    const emit = defineEmits(["select"]);

    export interface FieldType {
        id: string;
        name: string;
        icon: string;
        config?: string;
        desc: string;
    }

    const selected = ref<FieldType | undefined>(undefined);

    function select(field?: FieldType) {
        selected.value = field;
        emit("select", field);
    }
</script>
