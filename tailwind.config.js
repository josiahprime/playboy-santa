/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        snow: 'fall 10s linear infinite, sway 2s infinite ease-in-out',  // Animation for falling snow with sway
        snowfall: 'snowflakes 10s linear infinite', // Snowflake animation falling
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        sway: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(20px)' }, // Creates side-to-side sway
        },
        snowflakes: {
          '0%': { transform: 'translateY(-100vh)', opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },  // Snowflakes fade out as they fall
        },
      },
    },
  },
  plugins: [],
};
