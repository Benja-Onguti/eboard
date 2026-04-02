/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6fbfa",
          100: "#c9f1ee",
          200: "#9de6e0",
          300: "#6dd9d2",
          400: "#2fcbc4",
          500: "#00bdae",
          600: "#009a96",
          700: "#007973",
          800: "#005a55",
          900: "#003b38",
          950: "#021f23",
        },
        secondary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: ["Montserrat", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-out": "fadeOut 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "scale-up": "scaleUp 0.3s ease-out",
        blob: "blob 7s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
