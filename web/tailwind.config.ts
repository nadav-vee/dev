import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        crt: {
          bg: "#0b0b1f",
          panel: "#14143a",
          cyan: "#49f7ff",
          pink: "#ff4de2",
          lime: "#c9ff4d"
        }
      },
      boxShadow: {
        neon: "0 0 0 1px rgba(73,247,255,0.35), 0 0 24px rgba(255,77,226,0.25)"
      }
    }
  },
  plugins: []
};

export default config;
