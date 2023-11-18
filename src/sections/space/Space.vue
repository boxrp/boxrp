<template>
    <HeaderScroller>
        <template #header>
            <Title :title="store.space?.label + ' Space'" :icon="store.space?.icon" :actions="actions.title" />
            <LeftRight>
                <template #left>
                    <TabBar :tabs="tabs" :active="active" @click="tabClick" />
                </template>
                <template #right>
                    <div class="flex gap-1">
                        <Button v-for="{ id, label, icon, flip } in actions.actions" :id="id" :icon="icon" :flip="flip" :type="label ? 'outlined' : 'icon'">{{ label || icon }}</Button>
                    </div>
                </template>
            </LeftRight>
        </template>
    </HeaderScroller>
</template>

<script setup lang="ts">
    import { ref } from "vue";
    import { useSpaceStore } from "@store/space-store";
    import actions from "./actions.json";
    import HeaderScroller from "@view/HeaderScroller.vue";
    import Title from "@view/Title.vue";
    import LeftRight from "@view/LeftRight.vue";
    import TabBar from "@components/TabBar.vue";
    import Button from "@components/Button.vue";
    import Icons from "@components/icons";

    const store = useSpaceStore();
    const tabs = [
        { id: "dashboard", icon: Icons.dashboard },
        { id: "lists", icon: Icons.list },
    ];
    const active = ref("dashboard");

    function tabClick(id: string) {
        active.value = id;
    }
</script>
