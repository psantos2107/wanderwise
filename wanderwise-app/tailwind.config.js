/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-blue":
          "linear-gradient(to bottom left, #B2F2B2 0%, #1a4775 10%, #1a4775 75%, #B2F2B2 100%)",
        "gradient-white": "linear-gradient(to bottom right, #f8f9fa, #f0f0f0)",
      },
      borderRadius: {
        "25p": "25%",
      },
      colors: {
        "theme-color-light": "#ccd6e0",
        "theme-color-dark": "#000f1f",
      },
    },
  },
  plugins: [],
};

//"linear-gradient(to bottom right, #1a4775 60%, #00b3b3, #B2F2B2)"
//"linear-gradient(to bottom right, #00c2c2 0%, #1a4775 15%, #1a4775 80%, #00c2c2 100% #7da97d)"
