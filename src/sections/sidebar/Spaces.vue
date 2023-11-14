<template>
    <ul class="py-2 text-slate-500 text-sm font-medium">
        <li v-for="space in spaces">
            <NavItem :item="space" :active="active === space.id" @click="spaceClick(space.id)" @action="expand(space.id)">
                <div class="icon">{{ open.has(space.id) ? "expand_less" : "expand_more" }}</div>
            </NavItem>
            <ul v-if="open.has(space.id)">
                <NavItem v-for="list in space.lists" :item="list" :active="active === list.id" :small="true" icon="format_list_bulleted" @click="$emit('listclick', list.id)" />
            </ul>
        </li>
    </ul>

</template>

<script setup lang="ts">
    import { ref } from "vue";
    import NavItem from "./NavItem.vue";
    import { Space } from "@store/types";

    defineProps<{
        spaces: Space[];
        active: string;
    }>();

    const emit = defineEmits(["spaceclick", "listclick"]);
    const open = ref<Set<string>>(new Set());

    function spaceClick(id: string) {
        open.value.add(id);
        emit("spaceclick", id);
    }    

    function expand(id: string) {
        if (open.value.has(id)) {
            open.value.delete(id);
        } 
        else {
            open.value.add(id);
        }
    }    

</script>
