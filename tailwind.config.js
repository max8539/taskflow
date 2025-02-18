/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
    },
    extend: {}
  },
  plugins: [],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./utils/utils.ts"
  ],
  safelist: ['dark:hover:bg-primary-400', 'dark:hover:bg-red-400', 'dark:hover:bg-green-400']
}
