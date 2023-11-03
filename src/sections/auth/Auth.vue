<template>
    <main class="w-screen h-screen flex flex-col items-center bg-zinc-50">
        <div class="h-1/6"></div>
        <div class="border rounded-lg shadow-md p-9 flex flex-col items-center gap-4 w-96 bg-white">
            <Logo />
            <div id="auth"></div>
        </div>
    </main>
</template>

<script setup lang="ts">
    import { onMounted } from "vue";
    import * as firebaseui from "firebaseui";
    import { auth, uiConfig } from "@store/firebase";
    import Logo from "@components/Logo.vue";

    onMounted(() => {
        console.log("Starting");
        const ui = new firebaseui.auth.AuthUI(auth);
        ui.start("#auth", uiConfig);
    });

</script>

<style lang="scss">
    form {
        @apply flex flex-col gap-2 text-zinc-900 #{!important};
    }
    .firebaseui-title {
        @apply text-lg #{!important};
    }
    #ui-sign-in-email-input,
    #ui-sign-in-password-input {
        @apply my-2 w-full rounded-md border border-gray-300 shadow-sm #{!important};
    }
    .firebaseui-card-actions,
    .firebaseui-form-actions {
        @apply flex flex-col gap-4 #{!important};
    }
    .firebaseui-button {
        @apply bg-primary px-4 py-2 rounded-md text-white caption hover:bg-boxrp-600 #{!important};
    }
    .firebaseui-card-footer {
        @apply text-xs opacity-75 mt-4 #{!important};
    }
    .firebaseui-error {
        @apply text-red-500 text-xs #{!important};
    }
    // Terms etc
    .firebaseui-tos-list {
        @apply flex gap-2 #{!important};
    }
    .firebaseui-textfield {
        @apply mt-4 #{!important};
    }
    .firebaseui-link {
        @apply text-boxrp-700 hover:underline #{!important};
    }
</style>
