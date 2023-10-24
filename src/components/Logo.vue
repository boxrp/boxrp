<template>
    <div class="flex items-center">
        <template v-if="size === 'small'">
            <LogoMark class="fill-primary w-10" />
            <LogoText class="fill-primary w-20 mb-1 ml-2" />
        </template>
        <template v-else>
            <LogoMark class="fill-primary w-20" />
            <LogoText class="fill-logo w-40 mb-2 ml-3" />
        </template>
    </div>
</template>

<script setup lang="ts">
    import LogoMark from '@assets/logo-mark.svg';
    import LogoText from '@assets/logo-text.svg';

    defineProps<{
        size?: "small";
    }>();
</script>
