/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        badge: "10px",
        badgeWrap: "14px",
      },
    },
  },
  plugins: [],
};
