<template>
    <div ref="activator" @click.stop="activate" :class="class">
        <slot></slot>
    </div>
    <aside ref="floating" v-if="open" :style="floatingStyles" @click.stop="">
        <div class="flex flex-col gap-3 border-x border-b border-slate-300 rounded-b-md p-4 shadow-lg bg-white w-96 overflow-hidden">
            <input ref="name" type="text" placeholder="Field name" class="rounded-md border text-sm border-gray-200 placeholder-slate-300" autofocus />
            <FieldTypeList @select="select" />
            <div v-if="selected" class="flex flex-col gap-2">
                <!-- Field type description -->
                <div class="text-xs font-normal text-slate-400 px-2">{{ selected.desc }}</div>
                <!-- Optional user field description -->
                <input ref="desc" type="text" placeholder="Optional custom description" class="rounded-md border text-sm border-gray-200 placeholder-slate-300" />
                <!-- Required -->
                <div class="flex gap-1.5 items-center text-slate-700 text-sm p-2 border-b border-dashed pb-4">
                    <input type="checkbox" id="field-required" v-model="required" class="rounded-sm border border-gray-400 focus:ring-0">
                    <label for="field-required">Field is required</label>
                </div>
                <!-- Additional configuration component -->
                <component v-if="config" :is="config" :field="selected" />
            </div>
            <div class="flex justify-end">
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

    import DateConfig from "./DateConfig.vue";

    defineProps<{
        class: string | undefined;
    }>();

    const floating = ref(null);
    const activator = ref(null);
    const name = ref<HTMLElement | null>(null);
    const selected = ref<FieldType | undefined>(undefined);
    const required = ref(false);

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
        selected.value = field;
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
