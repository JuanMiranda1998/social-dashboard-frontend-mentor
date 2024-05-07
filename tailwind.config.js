/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./src/**/*.{html,js,jsx}",
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'Inter' : ['"Inter"']
    },
    extend: {},
  },
  plugins: [],
}

