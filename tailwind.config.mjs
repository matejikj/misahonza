/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-soft": "var(--bg-soft)",
        surface: "var(--surface)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        line: "var(--line)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        highlight: "var(--highlight)",
      },
      fontFamily: {
        display: ["Fraunces", "Cormorant Garamond", "serif"],
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 24px rgba(30,29,26,.06)",
        card: "0 16px 38px rgba(30,29,26,.08)",
        floating: "0 24px 60px rgba(30,29,26,.10)",
      },
      borderRadius: {
        sm: "10px",
        md: "16px",
        lg: "24px",
      },
      maxWidth: {
        container: "1200px",
        readable: "680px",
      },
    },
  },
  plugins: [],
};

