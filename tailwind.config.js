/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'mobile': '350px',
      // => @media (min-width: 640px) { ... }

      'tablet': '768px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1366px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
    fontSize: {
      xs: ['12px', '18px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      xxl: ['40px', '32px'],
    },
  },
  plugins: [],
};
