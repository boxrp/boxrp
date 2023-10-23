/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: "#3966F8",
                secondary: "#2a2e34",
                outline: "#E4E4E7" // zinc-200
            }
        },
    },
    plugins: [
        require('@headlessui/tailwindcss')
    ],
}

