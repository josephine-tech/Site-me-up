import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        charcoal: "#3D5D4D",
        sage: "#75A591",
        beige: "#F5F1EB",
        // Secondary
        terracotta: "#D3235E",
        burnt: "#E59996",
        peach: "#F5D3C8",
        teal: "#2A2F5F",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(61, 93, 77, 0.06), 0 12px 32px rgba(61, 93, 77, 0.08)",
        lift: "0 8px 24px rgba(61, 93, 77, 0.10), 0 24px 60px rgba(61, 93, 77, 0.12)",
        glow: "0 0 0 1px rgba(117, 165, 145, 0.2), 0 20px 60px rgba(117, 165, 145, 0.25)",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
