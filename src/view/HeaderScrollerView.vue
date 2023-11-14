<template>
    <article>
        <header>
            <!-- Title -->
            <section class="h-16 border-b flex items-center w-full">
                <slot name="title">
                    <div class="flex items-center pl-4">
                        <div class="icon text-slate-500">{{ icon || "format_list_bulleted" }}</div>
                        <div class="text-xl font-semibold text-slate-600 ml-2 mr-4">{{ title }}</div>
                    </div>
                </slot>
                <slot name="title-actions">
                    <!-- <div class="flex-1 flex gap-1 items-center justify-end">
                        <div v-for="action in actions" class="text-button">
                            <figure>{{ action.icon }}</figure>{{ action.label }}
                        </div>
                    </div> -->
                </slot>
            </section>
            <!-- Tabs -->
            <section>
                <div>
                    <slot name="tabs">
                    </slot>
                </div>
                <div>
                    <slot name="search">
                    </slot>
                </div>
            </section>
            <!-- Actions -->
            <section>
                <div>
                    <slot name="filters">
                    </slot>
                </div>
                <div>
                    <slot name="actions">
                    </slot>
                </div>
            </section>
            <!-- A non scrolling grid header -->
            <section>
                <slot name="grid-header"></slot>
            </section>
        </header>
        <main>
            <slot></slot>
        </main>
    </article>
</template>

<script setup lang="ts">
    import { ActionButton } from './view-types';

    defineProps<{
        title?: string;
        icon?: string;
        titleActions?: ActionButton[];
    }>();
</script>