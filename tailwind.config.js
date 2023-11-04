/** @type {import('tailwindcss').Config} */
/* eslint-env node */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#4E5D78",
                secondary: "#B0B7C3",
                ternary: "#F0F5FA",
                success: "#38CB89",
                btnbackground: "#377DFF",
            },
        },
    },
    plugins: [],
};
