<template>
    <article>
        <header>
            <!-- Title -->
            <section class="h-16 border-b flex items-center w-full px-4">
                <slot name="title">
                    <div class="flex items-center">
                        <div class="icon text-slate-500">{{ icon || "format_list_bulleted" }}</div>
                        <div class="text-xl font-semibold text-slate-600 ml-2 mr-4">{{ title }}</div>
                    </div>
                </slot>
                <slot name="title-actions">
                    <div class="flex-1 flex gap-1 items-center justify-end">
                        <div v-for="action in titleActions" class="text-button">
                            <figure>{{ action.icon }}</figure>{{ action.label }}
                        </div>
                    </div>
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
            <section class="px-4 mt-1 flex h-14 items-center border-b">
                <div>
                    <slot name="filters">
                    </slot>
                </div>
                <div class="flex-1 flex gap-1 items-center justify-end">
                    <slot name="actions">
                        <Button v-for="action in actions" :type="action.type" :id="action.id" :tooltip="action.tooltip" :icon="action.icon" :flip="action.flip">
                            {{ action.label || action.icon }}
                        </Button>
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
    import Button from '@components/Button.vue';

    defineProps<{
        title?: string;
        icon?: string;
        titleActions?: ActionButton[];
        actions?: ActionButton[];
    }>();
</script>