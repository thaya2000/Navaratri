/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blob: "blob 10s linear infinite",
      },
      keyframes: {
        blob: {
            '0%, 100%': {
              transform: 'translateY(-100vh) rotate(0deg) scale(0.5)',
            },
            '50%': {
              transform: 'translateY(100vh) rotate(360deg) scale(1)',
            },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}

