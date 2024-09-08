/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Dark_Blue: "hsl(240, 38%, 20%)",
                c_Grayish_Blue: "hsl(240, 18%, 77%)",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"]
            }
        },
    },
    plugins: [],
}

