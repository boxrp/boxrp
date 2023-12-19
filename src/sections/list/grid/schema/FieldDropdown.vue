<template>
    <div ref="activator" @click.stop="activate" :class="class">
        <slot></slot>
    </div>
    <aside ref="floating" v-if="open" :style="floatingStyles" @click.stop="">
        <div class="flex flex-col gap-3 border-x border-b border-slate-300 rounded-b-md p-4 shadow-lg bg-white w-96 overflow-hidden">
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
            <div class="flex justify-end gap-1">
                <Button type="text" @click="open = false">Cancel</Button>
                <Button type="flat">Save</Button>
            </div>
        </div>
    </aside>
</template>

<script setup lang="ts">
    import { ref, onBeforeUnmount, nextTick, computed } from "vue";
    import { useFloating } from "@floating-ui/vue";
    import FieldTypeList from "./FieldTypeList.vue";
    import { FieldType } from "./FieldTypeList.vue";
    import Button from "@components/Button.vue";
    import Expansion from "@components/Expansion.vue";
    import DateConfig from "./DateConfig.vue";
    import fields from "./fields.json";

    defineProps<{
        class: string | undefined;
    }>();

    const floating = ref(null);
    const activator = ref(null);
    const name = ref<HTMLElement | null>(null);
    const selected = ref<FieldType>(fields["data input"][0]);
    const required = ref(false);
    const label = ref("");
    const typeListExpanded = ref(false);

    const { floatingStyles } = useFloating(activator, floating, { placement: "bottom-end" });
    const open = ref(false);

    function activate() {
        open.value = true;
        document.addEventListener("click", deactivate);
        nextTick(() => name.value!.focus());
    }

    function deactivate() {
        open.value = false;
        document.removeEventListener("click", deactivate);
    }

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

    // Remove any hanging event listeners
    onBeforeUnmount(() => {
        deactivate();
    });
</script>
