<template>
    <main class="w-screen h-screen grid grid-cols-[auto,1fr] grid-rows-[auto,1fr] overflow-hidden">
        <Sidebar class="row-span-2" />
        <header class="">
            <router-view name="header"  />
        </header>
        <section class="overflow-auto">
            <router-view name="content" v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :key="$route.params.id || $route.path" :is="Component" />
                </transition>
            </router-view> 
        </section>
    </main>


    <!-- <main class="w-screen h-screen flex overflow-hidden">
        <Sidebar />
        <section class="flex-1 flex flex-col border border-green-500 mr-4">

            <div class="border border-red-500 overflow-hidden w-full mr-4">
                <div class="w-[2000px] h-64 bg-cyan-50"></div>
            </div>


             <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :key="$route.params.id || $route.path" :is="Component" />
                </transition>
            </router-view> 
         </section>
    </main> --> 
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
