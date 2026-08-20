/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light Theme Colors
        "light-bg": "#FFFFFF",
        "light-surface": "#FAFAFA",
        "light-border": "#E5E7EB",
        "light-text-primary": "#111827",
        "light-text-secondary": "#6B7280",
        accent: "#5E6AD2",
        "accent-dark": "#7C8BFF",
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",

        // Dark Theme Colors
        "dark-bg": "#09090B",
        "dark-surface": "#111113",
        "dark-border": "#27272A",
        "dark-text-primary": "#FAFAFA",
        "dark-text-secondary": "#A1A1AA",
      },
      fontSize: {
        hero: ["56px", { lineHeight: "1.1", fontWeight: "700" }],
        h1: ["40px", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["32px", { lineHeight: "1.25", fontWeight: "600" }],
        h3: ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        body: ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        small: ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        code: ["14px", { lineHeight: "1.5", fontWeight: "400" }],
      },
      maxWidth: {
        default: "1200px",
        content: "720px",
        wide: "1440px",
      },
      spacing: {
        "section-padding": "96px",
        "section-gap": "64px",
        "component-gap": "32px",
        "content-gap": "24px",
        "element-gap": "16px",
      },
      borderRadius: {
        button: "10px",
        card: "12px",
        input: "10px",
        badge: "9999px",
      },
      boxShadow: {
        small: "0 1px 2px rgba(0,0,0,.05)",
        medium: "0 8px 24px rgba(0,0,0,.08)",
      },
      transitionDuration: {
        fast: "150ms",
        default: "200ms",
        slow: "300ms",
      },
      transitionTimingFunction: {
        "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
