<template>
    <header class="h-16 border-b flex items-center w-full">
        <div class="flex items-center">
            <div class="icon text-slate-500">{{ icon || 'format_list_bulleted' }}</div>
            <div class="text-xl font-semibold text-slate-800 ml-2 mr-4">{{ label }}</div>
        </div>
        <div class="flex-1 flex gap-2 items-center justify-end">
            <Button label="Share" icon="share" class="py-2" :active="active === 'settings'" @click="changeView('settings')" />
            <Button label="Customise" icon="settings" class="py-2" :active="active === 'settings'" @click="changeView('settings')" />
        </div>
    </header>
</template>

<script setup lang="ts">
    import { computed } from "vue";
    import Button from "@components/Button.vue";
    import { useRouter, useRoute } from "vue-router";

    defineProps<{
        label: string | undefined;
        icon: string | undefined;
    }>();    

    const route = useRoute();
    const router = useRouter();
    const active = computed(() => route.params.view || "grid");
    
    function changeView(view: string) {
        const path = `/list/${router.currentRoute.value.params.id}/${view}`;
        router.push(path);
    }


</script>

<!-- , {id: "form", icon: "article"} -->
