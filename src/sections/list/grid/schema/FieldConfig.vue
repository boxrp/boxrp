<template>
    <div class="flex flex-col gap-3">
        <input ref="name" v-model="label" type="text" placeholder="Field name" class="rounded-md border text-sm border-gray-200 placeholder-slate-300" autofocus />
        <div>
            <FieldTypeList :selected="selected" @select="select" @expand="typeListExpanded = true" />
            <!-- Field type description -->
            <div v-if="!typeListExpanded" class="text-xs font-normal text-slate-400 px-2 pt-1">{{ selected?.desc }}</div>
        </div>
        <div v-if="!typeListExpanded" class="flex flex-col gap-2">
            <!-- Optional user field description -->
            <input ref="desc" type="text" placeholder="Optional custom description" class="rounded-md border text-sm border-gray-200 placeholder-slate-300" />
            <!-- Required -->
            <div class="flex gap-1.5 items-center text-slate-500 text-sm p-2">
                <input type="checkbox" id="field-required" v-model="required" class="rounded-sm border border-gray-400 focus:ring-0">
                <label for="field-required">Field is required</label>
            </div>
            <Expansion v-if="config" label="Configuration" class="text-slate-500 text-sm font-medium px-3 py-2 rounded-md border border-gray-200">
                <!-- Additional configuration component -->
                <component :is="config" :field="selected" />
            </Expansion>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, computed } from "vue";
    import FieldTypeList from "./FieldTypeList.vue";
    import { FieldType } from "./FieldTypeList.vue";
    import Expansion from "@components/Expansion.vue";
    import DateConfig from "./DateConfig.vue";
    import fields from "./fields.json";

    const name = ref<HTMLElement | null>(null);
    const selected = ref<FieldType>(fields["data input"][0]);
    const required = ref(false);
    const label = ref("");
    const typeListExpanded = ref(false);

    function select(field: FieldType) {
        typeListExpanded.value = false;
        selected.value = field;
        if (! label.value) {
            label.value = field.label;
        }
    }

    const config = computed(() => {
        switch (selected.value?.config) {
            case "date":
                return DateConfig;
        }
    });

</script>
