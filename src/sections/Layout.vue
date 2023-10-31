<template>
    <main class="w-screen h-screen flex">
        <Sidebar />
        <section class="flex-1 flex flex-col">
            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :key="$route.params.id || $route.path" :is="Component" />
                </transition>
            </router-view>
        </section>
    </main>
</template>

<script setup lang="ts">
    import Sidebar from "./sidebar/Sidebar.vue";
</script>

<style lang="scss">
    .fade-enter-active {
        animation: fade 0.25s;
    }
    .fade-leave-active {
        animation: fade 0.25s reverse;
    }

    @keyframes fade {
        from {
            opacity: 0%;
        }
        to {
            opacity: 100%;
        }
    }
</style>
