<template>
    <View>
        <template #header>
            <Header :label="label" class="px-4" />
        </template>
        <div class="p-6">
            {{ id }} {{ view }}
        </div>
    </View>
</template>

<script setup lang="ts">
    import View from "../View.vue";
    import Header from "../Header.vue";
    import { useRoute } from 'vue-router'
    import { $view, $label, getView } from "@store/view";
    import { useStore } from '@nanostores/vue'

    const route = useRoute()
    const id = route.params.id;
    const label = useStore($label);
    const view = useStore($view);




</script>
