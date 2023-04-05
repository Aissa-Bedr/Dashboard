/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            screens: {
                sm: "480px",
                md: "547px",
                lg: "768px",
                xl: "1024px",
                "2xl": "1680px",
            },
            colors: {
                dark: "#212529",
                light: "#f1f5f9",
                "blue-color": "#0075ff",
                "blue-dark-color": "#3a497b",
                "blue-alt-color": "#0d69d5",
                "blue-dark-alt-color": "#33416e",
                "green-color": "#22c55e",
                "orange-color": "#f59e0b",
                "red-color": "#f44336",
                "purple-color": "#B1B2FF",
                "pink-color": "#f9a8d4",
                "grey-color": "#888",
                "grey-dark-color": "#878a99",
                "grey-alt-color": "#eee",
                "grey-dark-alt-color": "#292e32",
            },
        },
    },
    plugins: [],
};
