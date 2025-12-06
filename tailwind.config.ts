import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "var(--primary)",
                    foreground: "var(--primary-foreground)",
                    glow: "var(--primary-glow)",
                    '100%': { boxShadow: '0 0 20px var(--primary-glow), 0 0 30px var(--primary-glow)' },
                }
            }
        },
    },
    plugins: [],
} satisfies Config;
