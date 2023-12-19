<template>
    <LeftRight>
        <template #left>
            <TabBar :tabs="definition.tabs" :active="activeTab" @click="changeView" />
        </template>
        <template #right>
            <div class="flex gap-1">
                <Button v-for="{ id, icon } in tabActions" :id="id" :icon="icon" type="icon" @click="$emit('action', id)">{{ icon }}</Button>
            </div>
        </template>
    </LeftRight>
</template>

<script setup lang="ts">
    import { computed } from "vue";
    import { useRouter, useRoute } from "vue-router";
    import LeftRight from "@view/LeftRight.vue";
    import TabBar from "@components/TabBar.vue";
    import Button from "@components/Button.vue";

    import { standardDefinition as definition } from "@store/list-view-definition";

    defineEmits(["action"]);

    const route = useRoute();
    const router = useRouter();
    const activeTab = computed(() => (route.params.tab as string) || "grid");
    const tabActions = computed(() => (definition.tabs?.find((tab) => tab.id === activeTab.value) || { actions: [] }).actions);

    function changeView(id: string) {
        const path = `/list/${router.currentRoute.value.params.id}/${id}`;
        router.push(path);
    }
</script>
