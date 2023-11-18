<template>
    <section class="border-b flex w-full px-4">
        <div class="flex-1 flex items-center justify-start">
            <slot name="left" />
        </div>
        <div class="flex-1 flex items-center justify-end">
            <slot name="right" />
        </div>
    </section>
</template>
