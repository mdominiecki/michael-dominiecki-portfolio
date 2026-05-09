import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        porcelain: "#f8f8f6",
        pearl: "#efefec",
        silver: "#d8dadd",
        graphite: "#17181a",
        ink: "#232529",
        muted: "#6f747b",
        electric: "#79b8ff",
        cyan: "#8fe5ea",
        violet: "#c8b8ff",
        teal: "#9ce4d3"
      },
      boxShadow: {
        premium: "0 24px 70px rgba(23, 24, 26, 0.10)",
        lift: "0 18px 55px rgba(23, 24, 26, 0.12)",
        glow: "0 0 34px rgba(121, 184, 255, 0.22)"
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.35rem"
      },
      backgroundImage: {
        "premium-border":
          "linear-gradient(135deg, rgba(121,184,255,0.55), rgba(200,184,255,0.35), rgba(156,228,211,0.42))",
        "mesh-soft":
          "radial-gradient(circle at 18% 18%, rgba(121,184,255,0.20), transparent 32%), radial-gradient(circle at 78% 8%, rgba(200,184,255,0.18), transparent 30%), radial-gradient(circle at 54% 78%, rgba(156,228,211,0.16), transparent 34%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -12px, 0)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.42", transform: "scale(1)" },
          "50%": { opacity: "0.78", transform: "scale(1.035)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseGlow: "pulseGlow 5s ease-in-out infinite",
        shimmer: "shimmer 9s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
