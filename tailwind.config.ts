import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // GRUPO US Color Palette - PANTONE Specification
        "primary-dark": {
          DEFAULT: "#112031",
          dark: "#0A1520",
        },
        "primary-blue": {
          DEFAULT: "#294359",
          dark: "#1E3A4F",
        },
        "accent-gold": {
          DEFAULT: "#AC9469",
          dark: "#C4A876",
        },
        "neutral-light": {
          DEFAULT: "#B4AC9C",
          dark: "#8A8275",
        },
        "neutral-extralight": {
          DEFAULT: "#D2D0C8",
          dark: "#3A3832",
        },
        // Semantic Colors
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        background: "var(--background)",
        surface: "var(--surface)",
        // Shadcn/ui compatibility
        foreground: "var(--text-primary)",
        card: {
          DEFAULT: "var(--surface)",
          foreground: "var(--text-primary)",
        },
        popover: {
          DEFAULT: "var(--surface)",
          foreground: "var(--text-primary)",
        },
        primary: {
          DEFAULT: "#AC9469",
          foreground: "#112031",
        },
        secondary: {
          DEFAULT: "#294359",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "var(--neutral-extralight)",
          foreground: "var(--text-muted)",
        },
        accent: {
          DEFAULT: "#AC9469",
          foreground: "#112031",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        border: "var(--neutral-light)",
        input: "var(--surface)",
        ring: "#AC9469",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        heading: ["Optima", "serif"],
        body: ["Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        serif: ["Optima", "serif"],
      },
      fontSize: {
        "responsive-h1": ["clamp(2rem, 5vw, 3.5rem)", { lineHeight: "1.1" }],
        "responsive-h2": ["clamp(1.5rem, 4vw, 2.5rem)", { lineHeight: "1.2" }],
        "responsive-h3": [
          "clamp(1.25rem, 3vw, 1.875rem)",
          { lineHeight: "1.3" },
        ],
      },
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
        "3xl": "6rem",
      },
      animation: {
        "theme-transition": "theme-transition 0.3s ease-in-out",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite alternate",
      },
      keyframes: {
        "theme-transition": {
          "0%": { opacity: "0.8" },
          "100%": { opacity: "1" },
        },
        "neon-pulse": {
          "0%": { filter: "drop-shadow(0 0 8px rgba(172, 148, 105, 0.7))" },
          "100%": { filter: "drop-shadow(0 0 16px rgba(172, 148, 105, 1))" },
        },
      },
      dropShadow: {
        "gold-neon": "0 0 8px rgba(172, 148, 105, 0.7)",
        "gold-neon-strong": "0 0 16px rgba(172, 148, 105, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
