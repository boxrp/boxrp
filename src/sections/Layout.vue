<template>
    <main class="w-screen h-screen flex overflow-hidden">
        <Sidebar class="w-58" />
        <div class="flex-1 overflow-hidden">
            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" :key="$route.params.id || $route.name || $route.path" />
                </transition>
            </router-view>
        </div>
    </main>
</template>

<script setup lang="ts">
    import Sidebar from "./sidebar/Sidebar.vue";
</script>

<style lang="scss">
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.1s;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>
