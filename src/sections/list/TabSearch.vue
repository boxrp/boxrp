<template>
    <LeftRight>
        <template #left>
            <TabBar :tabs="definition.tabs" :active="active" @click="changeView" />
        </template>
        <template #right> SEARCH </template>
    </LeftRight>
</template>

<script setup lang="ts">
    import { computed } from "vue";
    import { useRouter, useRoute } from "vue-router";
    import LeftRight from "@view/LeftRight.vue";
    import TabBar from "@components/TabBar.vue";

    import { standardDefinition as definition } from "@store/list-view-definition";

    const route = useRoute();
    const router = useRouter();
    const active = computed(() => (route.params.tab as string) || "grid");

    function changeView(id: string) {
        const path = `/list/${router.currentRoute.value.params.id}/${id}`;
        router.push(path);
    }
</script>
