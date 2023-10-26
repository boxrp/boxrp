<template>
    <View>
        <template #header>
            <Header :label="label" :icon="list?.icon" class="px-4" />
        </template>
        <div class="p-6">
            {{ id }} {{ list }}
        </div>
    </View>
</template>

<script setup lang="ts">
    import View from "../View.vue";
    import Header from "../Header.vue";
    import { useRoute } from 'vue-router'
    import { $list, $label } from "@store/list";
    import { useStore } from '@nanostores/vue'

    const route = useRoute()
    const id = route.params.id;
    const list = useStore($list);
    const label = useStore($label);




</script>
@store/list