/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"],
        inter: ["Inter", "serif"],
        roboto: ["Roboto", "serif"],
      },
      colors: {
        // primary:"#0D6EFD", 
        // "primary-bg": "#F7FAFC",
        // dark: "#1C1C1C",
        // "primary-light": "#E5F1FF",
        // "secondary-bg": "#F38332",
        // "tertiary-bg": "#55BDC3",

        // quaternary: "#9b59b6",
        // quinary: "#1abc9c",
        // secondaryLight: "#f39c12",
        // secondaryDark: "#c0392b",
      },
      backgroundImage: {
        // "button-primary": "linear-gradient(180deg, #127FFF 0%, #0067FF 100%)", 
        // "gradient-radial": "radial-gradient(circle, #1abc9c 0%, #16a085 100%)", // Example radial gradient
        // "gradient-linear": "linear-gradient(to right, #f39c12, #e74c3c)", // Example linear gradient
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite', // Slow and smooth spin
      },
      blur: {
        sm: '4px',
        md: '8px',
      },
    },
  },
  plugins: [],
});


