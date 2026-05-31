import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: "#0D0D0D",
        "carbon-mid": "#1A1A1A",
        ember: "#FF4D00",
        gold: "#D4A017",
        cream: "#F5F0E8",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        ui: ["var(--font-barlow)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "ember-gradient":
          "radial-gradient(ellipse at center, #FF4D00 0%, #8B1A00 50%, #0D0D0D 100%)",
        "gold-gradient": "linear-gradient(135deg, #D4A017 0%, #8B6914 100%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulse_wsp: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(37,211,102,0.7)" },
          "50%": { boxShadow: "0 0 0 14px rgba(37,211,102,0)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        pulse_wsp: "pulse_wsp 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
