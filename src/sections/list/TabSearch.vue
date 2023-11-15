<template>
    <LeftRight>
        <template #left>
            <TabBar :tabs="definition.tabs" active="grid" @click="tabClick" />
        </template>
        <template #right>
            <!-- <div class="flex gap-1">
                <Button v-for="{ id, label, icon, flip } in actions.actions" :id="id" :icon="icon" :flip="flip" :type="label ? 'outlined' : 'icon'">{{ label || icon }}</Button>
            </div> -->
        </template>
    </LeftRight>
</template>

<script setup lang="ts">
    import { computed } from "vue";
    import { useRoute } from "vue-router";
    import { useListStore } from "@store/list-store";

    import actions from "./actions.json";
    import LeftRight from "@view/LeftRight.vue";
    import TabBar from "@components/TabBar.vue";


    import { standardDefinition as definition } from "@store/list-view-definition";

    function tabClick(id: string) {
        console.log(id);
    }

</script>

<style scoped lang="scss"></style>
