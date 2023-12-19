/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
    safelist: ['button-flat', 'button-outlined', 'button-text', 'button-icon'],
    theme: {
        extend: {
            colors: {
                primary: "#3966F8",
                secondary: "#2a2e34",
                logo: "#111111",
                "boxrp": {
                    '1': '#F3F6FB',
                    '2': '#E7EDF7',
                    '3': '#B6E1FF',

                    '50': '#eff4ff',
                    '100': '#dbe5fe',
                    '200': '#bed2ff',
                    '300': '#92b5fe',
                    '400': '#5e8efc',
                    '500': '#3966f8',

                    '600': '#2345ed',   // Used in Auth.vue
                    '700': '#1b31da',
                    '800': '#1c2ab1',
                    '900': '#1d298b',
                    '950': '#161c55',
                },
            }
        },
    },
    plugins: [
        require('@headlessui/tailwindcss'),
        require('@tailwindcss/forms'),
    ],
}

// https://uicolors.app/create