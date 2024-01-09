/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        customPrimary: "#fde02f",
        customSecondary: "#fde02f",
        customRed:"#fd2f4c",
        customBlue: "#5271ff",
        customYellow: "#fde02f",
        customPurple: "#1e1548",
        customDarkBg1: "rgb(26,26,26)",
        customDarkBg2: "rgb(32,32,32)",
        customDarkBg3: "rgb(42, 42, 42)",
        customDarkBg3Hover: "rgb(55, 56, 62)",
        customContentSubtitle: "rgb(178, 184, 205)",
        customGrayBorder: "rgb(255,255,255,0.1)",
        customGrayText: "#aeb2b7",
        customDarkBgTransparent: "rgb(26,26,26, 0.7)",
        customDarkBgTransparentDarker: "rgb(0,0,0,0.5)",
        customDarkBgTransparentLighter: "rgb(32, 32, 32, 0.7)"
      },
      fontFamily: {
        Inter: "Inter",
      },
      screens: {
        xs: "530px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xll: "1400px",
        "2xl": "1536px",
      },
    },
  },
};

