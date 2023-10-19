/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: "#3966F8",
                secondary: "#68686D"
            }
        },
    },
    plugins: [],
}

