/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
          pulse: '  pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
      pulse: {
   
          '50%': { TransformStream:'scale(1.05)'},
        },
      },
    },
  },
  plugins: [],
}