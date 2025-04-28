// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/@heroui/theme/dist/components/(input|form).js"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
